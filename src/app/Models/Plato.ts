export class Plato {
 
    title!: string
    vegan!: boolean
    vegetarian?: boolean
    veryHealthy?: boolean
    veryPopular?: boolean
    weightWatcherSmartPoints?: number
    aggregateLikes?: number
    cheap?: boolean
    cookingMinutes!: null
    creditsText?: string 
    dairyFree!: boolean
    extendedIngredients!: extendedIngredients[]
    gaps!: string
    glutenFree!: boolean
    healthScore!: number 
    id!: number
    image!: string
    imageType?: string
    instructions!: string                                                                                                
    lowFodmap?: boolean
    originalId?: boolean
    preparationMinutes!: number
    pricePerServing!: number
    readyInMinutes!: number
    servings!: number
    sourceName?: string
    sourceUrl?: string 
    summary!: string
    sustainable?: string 
    

}

export interface extendedIngredients{
    id: number;
    aisle: string;
    image: string;
    consistency: string;
    name: string;
    nameClean: string;
    original: string;
    originalName: string;
    amount: number;
    unit: string;
    meta: string [];
        
    
}



export class Platos{
    results?: string;
    id!: number;
    title! : string;
    image!: string; 
    imagetype?:string;
    pricePerServing!: number
} 
