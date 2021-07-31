Events.on(ClientLoadEvent, () => {



    const moon = new Planet("moon", Planets.serpulo, 1, 0.3);
    moon.generator = new MoonPlanetGenerator();
    moon.mesh = new HexMesh(moon, 5);
    moon.orbitRadius = 3.2;
    moon.orbitTime = 1.5 * 10;
    moon.rotateTime = 30;
    moon.bloom = true;
    moon.accessible = true;
    moon.startSector = 1;
    moon.alwaysUnlocked = true;
    moon.localizedName = "Mun";



    const antarcticaSurvival = new SectorPreset("fork", moon, 1);
    antarcticaSurvival.captureWave = 30;
    antarcticaSurvival.localizedName = "Fork";
    antarcticaSurvival.difficulty = 6;
    antarcticaSurvival.alwaysUnlocked = true;


});
