const rogerla = Vars.content.getByName(ContentType.planet, "yagoismod-rogerla");

const cori = new JavaAdapter(Planet, {}, "cori", rogerla, 2, 0.4);
cori.generator = new SerpuloPlanetGenerator();
cori.startSector = 7;
cori.hasAtmosphere = true;
cori.atmosphereColor = Color.valueOf("1c7fa690");
cori.meshLoader = function(){
  return new HexMesh(cori, 7);
};

const lavaFlow = new JavaAdapter(SectorPreset, {}, "lavaflow", cori, 7);
lavaFlow.captureWave = 20;