var newBuild = {
	//paths to units and their location in build bars go here
	//like this:
	//"/pa/units/land/tick/tick.json": ["bot", 0, { row: 1, column: 2 }]
	
	"/pa/units/assimilation/air/a_fabrication_aircraft/a_fabrication_aircraft.json": ["a_air", 0, { row: 2, column: 0 }],
	"/pa/units/assimilation/air/a_stake/a_stake.json": ["a_air", 0, { row: 2, column: 1 }],
	"/pa/units/assimilation/air/a_blazer/a_blazer.json": ["a_air", 0, { row: 2, column: 2 }],
	"/pa/units/assimilation/air/a_aftershock/a_aftershock.json": ["a_air", 0, { row: 2, column: 3 }],
	"/pa/units/assimilation/air/a_shrike/a_shrike.json": ["a_air", 0, { row: 2, column: 4 }],
	"/pa/units/assimilation/air/a_swallow/a_swallow.json": ["a_air", 0, { row: 2, column: 5 }],
	"/pa/units/assimilation/air/a_spitter/a_spitter.json": ["a_air", 0, { row: 2, column: 6 }],

	"/pa/units/assimilation/sea/a_fabrication_ship/a_fabrication_ship.json": ["a_sea", 0, { row: 2, column: 0 }],
	"/pa/units/assimilation/sea/a_croc/a_croc.json": ["a_sea", 0, { row: 2, column: 1 }],
	"/pa/units/assimilation/sea/a_mortar/a_mortar.json": ["a_sea", 0, { row: 2, column: 2 }],
	"/pa/units/assimilation/sea/a_ironclad/a_ironclad.json": ["a_sea", 0, { row: 2, column: 3 }],
	"/pa/units/assimilation/sea/a_trident/a_trident.json": ["a_sea", 0, { row: 2, column: 4 }],
	"/pa/units/assimilation/sea/a_siren/a_siren.json": ["a_sea", 0, { row: 2, column: 5 }],
	"/pa/units/assimilation/sea/a_guppy/a_guppy.json": ["a_sea", 0, { row: 2, column: 6 }],
	
	"/pa/units/assimilation/air/a_air_factory/a_air_factory.json": ["a_factory", 0, { row: 2, column: 2 }],
	"/pa/units/assimilation/sea/a_naval_factory/a_naval_factory.json": ["a_factory", 0, { row: 2, column: 1 }],
	
	"/pa/units/assimilation/air/a_air_factory_hyper/a_air_factory_hyper.json": ["a_factory", 0, { row: 1, column: 2 }],
	"/pa/units/assimilation/sea/a_naval_factory_hyper/a_naval_factory_hyper.json": ["a_factory", 0, { row: 1, column: 1 }],

	"/pa/units/assimilation/land/a_fabrication_vehicle/a_fabrication_vehicle.json": ["a_vehicle", 0, { row: 2, column: 0 }],
	"/pa/units/assimilation/land/a_shaker_cannon/a_shaker_cannon.json": ["a_vehicle", 0, { row: 2, column: 1 }],
	"/pa/units/assimilation/land/a_arc_cannon/a_arc_cannon.json": ["a_vehicle", 0, { row: 2, column: 2 }],
	"/pa/units/assimilation/land/a_sweeper/a_sweeper.json": ["a_vehicle", 0, { row: 2, column: 3 }],
	"/pa/units/assimilation/land/a_hail/a_hail.json": ["a_vehicle", 0, { row: 2, column: 4 }],
	
	"/pa/units/assimilation/land/a_vehicle_factory/a_vehicle_factory.json": ["a_factory", 0, { row: 2, column: 3 }],
	"/pa/units/assimilation/land/a_vehicle_factory_hyper/a_vehicle_factory_hyper.json": ["a_factory", 0, { row: 1, column: 3 }],
	
	"/pa/units/assimilation/land/a_energy_plant/a_energy_plant.json": ["a_utility", 0, { row: 1, column: 3 }],
	"/pa/units/assimilation/land/a_metal_extractor/a_metal_extractor.json": ["a_utility", 0, { row: 1, column: 4 }],
	"/pa/units/assimilation/land/a_energy_storage/a_energy_storage.json": ["a_utility", 0, { row: 2, column: 3 }],
	"/pa/units/assimilation/land/a_metal_storage/a_metal_storage.json": ["a_utility", 0, { row: 2, column: 4 }],
	
	"/pa/units/land/nuke_launcher/nuke_launcher_small_ammo.json": ["ammo", 0, { row: 2, column: 6 }],
	"/pa/units/land/nuke_launcher/nuke_launcher_medium_ammo.json": ["ammo", 0, { row: 2, column: 5 }]
}
if (Build && Build.HotkeyModel && Build.HotkeyModel.SpecIdToGridMap) {
    _.extend(Build.HotkeyModel.SpecIdToGridMap, newBuild);
}