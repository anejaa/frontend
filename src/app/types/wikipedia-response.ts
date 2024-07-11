export interface WikipediaResponseItem {
  page_id: number;
  title: string;
  opening_text: string;
}

export type WikipediaResponse = WikipediaResponseItem[];
