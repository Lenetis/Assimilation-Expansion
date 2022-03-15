import json

with open('C:/Program Files (x86)/Steam/steamapps/common/Planetary Annihilation Titans/media/pa_ex1/units/unit_list.json') as base_unit_list:
    base_units = json.load(base_unit_list)['units']
with open('assimilation_unit_list.json') as assim_unit_list:
    assim_units = json.load(assim_unit_list)['units']
        

merged = []
for i in base_units:
    merged.append(i)
for i in assim_units:
    merged.append(i)

new_unit_list = {'units': merged}

with open('unit_list.json', 'w') as file:
    json.dump(new_unit_list, file)

input('Merge successful.')
        
