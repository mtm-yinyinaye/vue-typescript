import { ItemInterface } from "@/models/items/itemsInterface";

export interface ItemsStateInterface {
  loading: boolean
  items: ItemInterface[]
}