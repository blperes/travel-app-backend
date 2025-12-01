export class CreatePointOfInterestDto {
  name: string;
  description?: string;
  order?: number;
  locationId: number;
}