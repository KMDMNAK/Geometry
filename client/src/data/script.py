import requests
url ="https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"

json_country = requests.get(url).json()

country_list =list(map(lambda x:x["properties"]["NAME"],json_country["objects"]["ne_110m_admin_0_countries"]["geometries"]))
with open('jpn2en.country.csv','w') as f:
    f.write('\n'.join(country_list))
