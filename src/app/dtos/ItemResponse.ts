export class ItemResponse {
  public Id: string;
  public Name: string;
  public Description: string;
  public BarCode: string;

  constructor(id: string, name: string, description: string, BarCode: string) {
    this.Id = id;
    this.Name = name;
    this.Description = description;
    this.BarCode = BarCode;
  }
}
