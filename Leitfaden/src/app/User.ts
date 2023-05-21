export class User {
    WindowsScore: number;
    MacOSScore: number;
    ChromeOSScore: number;
    UbuntuScore: number;
    MintScore: number;

    constructor() {
        this.WindowsScore = 0;
        this.MacOSScore = 0;
        this.ChromeOSScore = 0;
        this.UbuntuScore = 0;
        this.MintScore = 0;
    }

    AddPoints(windows: number, macos: number, chromeos: number, ubuntu: number, mint: number) {
        this.WindowsScore += windows;
        this.MacOSScore += macos;
        this.ChromeOSScore += chromeos;
        this.UbuntuScore += ubuntu;
        this.MintScore += mint;
    }
}