// conditional type :  je type condition er upor nirvorsheel

type A = null;
type B = undefined;

type C = A extends number ? true : B extends undefined ? true : false;

type RichPeoplesVehicle11 = {
  bike: string;
  car: string;
  ship: string;
};

type CheckVehicle<T> = T extends keyof RichPeoplesVehicle11 ? true : false;

type HasBike = CheckVehicle<"tractor">;