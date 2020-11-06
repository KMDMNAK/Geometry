/**
 * ニュースの情報を地図表示用のデータを作成
 * 
 * 将来的には、データベースから直接map表示用データをもらう
 */

interface ParsedNews { }
export const parseNews = (): ParsedNews => {
    return {} as ParsedNews
}

export const getCountry = () => {
    // TODO delete mock

}

export type CountryData = {
    // mapで表示する国名
    mapCountryName: string
    newsAmount: number
}

export class NewsGetter {
    getNewsAmount(): { [key: string]: CountryData } {
        const mockData = {
            "Mongolia": { mapCountryName: "Mongolia", newsAmount: 2 },
            "Norway": { mapCountryName: "Norway", newsAmount: 3 },
            "Iraq": { mapCountryName: "Iraq", newsAmount: 10 },
            "Iran": { mapCountryName: "Iran", newsAmount: 5 }
        }
        return mockData
    }
}

export class MapColorChanger {
    private digits: number = 0
    private unit = 30
    private chunk = 0
    constructor(color: 'RED' | 'GREEN' | 'BLUE') {
        switch (color) {
            case 'BLUE': {
                this.digits = 1
                break
            }
            case 'GREEN': {
                this.digits = 16 ** 2
                break
            }
            case 'RED': {
                this.digits = 16 ** 4
                break
            }
        }
    }
    getCountryColor(country: CountryData) {
        const twoHex = country.newsAmount * this.unit
        const hexString = ((twoHex < 256 ? twoHex : 255) * this.digits).toString(16)
        console.debug({ hexString, country })
        const colorString = ('000000' + hexString).slice(-6)
        return {
            name: country.mapCountryName,
            color: colorString
        }
    }
}