import json

with open('C:/Program Files (x86)/Steam/steamapps/common/Planetary Annihilation Titans/media/pa/units/commanders/commander_list.json') as base_unit_list:
    base_units = json.load(base_unit_list)['commanders']
with open('assimilation_commander_list.json') as assim_unit_list:
    assim_units = json.load(assim_unit_list)['commanders']
        

merged = []
for i in base_units:
    merged.append(i)
for i in assim_units:
    merged.append(i)

new_unit_list = {'commanders': merged}

with open('commander_list.json', 'w') as file:
    json.dump(new_unit_list, file)

input('Merge successful.')
