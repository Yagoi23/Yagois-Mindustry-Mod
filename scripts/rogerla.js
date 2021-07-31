// Just a little note to not forget Pixellandia :D
//I won't forget :)
const rogerla = extend(Planet, "rogerla", Planets.sun, 1, 0.5, {
    generator: new SerpuloPlanetGenerator(),
    bloom: true,
    radius: 1,
    accessible: true,
    hasAtmosphere: true,
    atmosphereColor: Color.valueOf("80ff00"),
    atmosphereRadIn: 0.02,
    atmosphereRadOut: 0.3,
    localizedName: "Rogerla"
});
rogerla.meshLoader = () => extend(HexMesh, rogerla, 6, {});

const lavaFlow = extend(SectorPreset, "lavaflow", rogerla, 1, {
    captureWave: 14,
    localizedName: "lava flow",
    difficulty: 1,
    alwaysUnlocked: true
});

module.exports = {
    rogerla: rogerla,
    lavaFlow: lavaFlow,
}
