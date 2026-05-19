import type { Request, Response } from "express";
import { authService } from "./auth.service";
import config from "../../config";

const loginUser = async (req: Request, res: Response) => {
  try {
    const result = await authService.loginUserIntoDB(req.body);
    const { accessToken, refreshToken } = result;

     res.cookie("accessToken", accessToken, {
      httpOnly: true, // শুধুমাত্র HTTP অনুরোধে অ্যাক্সেসযোগ্য, JavaScript থেকে অ্যাক্সেসযোগ্য নয়
      secure: config.node_env === "production",
      sameSite: "lax", // CSRF আক্রমণ প্রতিরোধে সাহায্য করে
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true, // only accessible via HTTP requests, not accessible from JavaScript
      secure: config.node_env === "production",
      sameSite: "lax", // helps prevent CSRF attacks
    });

    res.status(200).json({
      success: true,
      message: "User retrieved successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};


const refreshToken = async (req: Request, res: Response) => {
  try {
    const result = await authService.generateRefreshToken(
      req.cookies.refreshToken,
    );
    res.status(200).json({
      success: true,
      message: "Refresh token generated!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

export const authController = {
  loginUser,
  refreshToken,
};
