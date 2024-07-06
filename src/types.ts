export interface CreatorList {
  creators: Creator[];
}

export default interface Creator {
  name: string;
  url: string;
  description: string;
  imageURL?: string;
  id: number;
}
