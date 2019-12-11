# country geo
	geo.json
	- type
		FeatureCollection
	- features
		list
			- type
			- id
			- properties
				- name
					Egypt
			- geometry
				- type
					Polygon
					multipolygon 60コ
				- coordinates
					[[[x0,y0],[x1,y1]]]
					# x:経度,y:緯度 西経-東経+北緯+南緯-
				- average
					[[]]
# Cities
	- type
		FeatureCollection
	- features
		list
			- type
			- properties
				- NAME
			- geometry
				- type
					Polygon(Polygonのみ)
				- coordinates
					[[[x0,y0],[x1,y1]]]
					# x:経度,y:緯度 西経-東経+北緯+南緯-

# average
	- average (key : country name)
	
# world-110m
	-type
		Topology
	- arcs
		list
	- transform
		scale
			list
		translate
	- objects
		ne_110m_admin_0_countries
			- type
				GeometryCollection
			- geometries
				- arcs
				- type
					Polygon
				- properties
					- Name
					- NAME_LONG
					- ABBREV
					- FORMAL_EN
					- POP_EST
					- POP_RANK
					- GDP_MD_EST
					- POP_YEAR
					- GDP_YEAR
					- ISO_A2
					- ISO_A3
					- CONTINENT
					- REGION_UN
					- SUBREGION
				
## dataの加工

*citiesデータに国の情報を付加させる.*


