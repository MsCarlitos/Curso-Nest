import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED, BRAND_SEED } from './data/';

@Injectable()
export class SeedService {
    constructor(
        private readonly carsService: CarsService,
        private readonly brandsService: BrandsService
    ) { }
    populateDB() {
        this.carsService.fillCarWithSeedData(CARS_SEED)
        this.brandsService.fillBrandWithSeedData(BRAND_SEED)
        return 'Seed Execute';
    }
}
