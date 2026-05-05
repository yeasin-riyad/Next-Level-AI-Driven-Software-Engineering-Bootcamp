// 🔹 Abstraction Example

//👉 Abstraction = “User কে simple interface দেওয়া, ভিতরের জটিল logic লুকানো”

// =======================
// 1. Interface (Idea Only)
// =======================

// 👉 Interface = শুধু structure / idea
interface IMediaPlayer {
  play(): void;
  pause(): void;
  stop(): void;
}

// =======================
// Implementation (Interface)
// =======================

// 👉 class must implement all methods
class MusicPlayer implements IMediaPlayer {
  play() {
    console.log("Playing music....");
  }

  pause() {
    console.log("Music paused...");
  }

  stop() {
    console.log("Music stopped");
  }
}

// 👉 instance তৈরি
const player1 = new MusicPlayer();

// 👉 user শুধু method call করছে (implementation জানে না)
player1.play();


// =======================
// 2. Abstract Class (Idea + Partial Control)
// =======================

// 👉 abstract class = blueprint (object বানানো যায় না)
abstract class AbstractMediaPlayer {
  // 👉 শুধু method declaration (no body)
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

// =======================
// Implementation (Abstract Class)
// =======================

class MezbaPlayer extends AbstractMediaPlayer {
  play() {
    console.log("Playing music...");
  }

  pause() {
    console.log("Music is paused!");
  }

  stop() {
    console.log("Music is stopped!");
  }
}

// 👉 instance তৈরি
const player2 = new MezbaPlayer();

// 👉 method call
player2.play();