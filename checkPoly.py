import sys
import json

COUNTRY_FILE_NAME=sys.argv[1]
CITY_FILE_NAME=sys.argv[2]
AVERAGE_FILE_NAME=sys.argv[3]

"""
with open(COUNTRY_FILE_NAME,"r") as f:
    country_json=json.loads(f.read())

with open(CITY_FILE_NAME,"r") as f:
    city_json=json.loads(f.read())
"""

with open(AVERAGE_FILE_NAME,"r") as f:
    mean_json=json.loads(f.read())

for country_name,position in mean_json.items():
    position.append(country_name)
    print(position)

def isInPoly(checked_positions,country_position):
    """
        
    """
    pass
