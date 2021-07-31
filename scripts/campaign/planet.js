Events.on(ClientLoadEvent, () => {



    const tontontros = new Planet("tontontros", sun, 1, 0.3);
    tontontros.generator = new TantrosPlanetGenerator();
    tontontros.mesh = new HexMesh(tontontros, 5);
    tontontros.orbitRadius = 3.2;
    tontontros.orbitTime = 1.5 * 10;
    tontontros.rotateTime = 30;
    tontontros.bloom = true;
    tontontros.accessible = true;
    tontontros.startSector = 1;
    tontontros.alwaysUnlocked = true;
    tontontros.localizedName = "Mun";



    const antarcticaSurvival = new SectorPreset("fork", tontontros, 1);
    antarcticaSurvival.captureWave = 30;
    antarcticaSurvival.localizedName = "Fork";
    antarcticaSurvival.difficulty = 6;
    antarcticaSurvival.alwaysUnlocked = true;


});
