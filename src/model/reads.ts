interface Read {
  title: string;
  duration: number;
  progress: number;
  pages: number;
  pageTarget: number;
}

class GenericRead implements Read {
  title: string;
  duration: number;
  progress: number;
  pages: number;
  pageTarget: number;

  constructor(title: string) {
    this.title = title;
    this.progress = Math.floor(Math.random() * 10);
    this.duration = this.progress + Math.floor(Math.random() * 10);
    this.pages = Math.floor(Math.random() * 10);
    this.pageTarget = this.pages + Math.floor(Math.random() * 10);
  }
}

const reads: Read[] = [
  new GenericRead("Where the wild things are"),
  new GenericRead("Green Eggs & Ham"),
  new GenericRead("Very Hungry Caterpillar"),
  new GenericRead("Where the wild things decided to go"),
  new GenericRead("Green Eggs & Ham"),
  new GenericRead("Very Hungry Caterpillar"),
  new GenericRead("Where the wild things are"),
  new GenericRead("Green Eggs & Ham"),
  new GenericRead("Very Hungry Caterpillar"),
  new GenericRead("Where the wild things are"),
  new GenericRead("Green Eggs & Ham"),
  new GenericRead("Very Hungry Caterpillar"),
  new GenericRead("Where the wild things are"),
  new GenericRead("Green Eggs & Ham"),
  //   new GenericRead("Very Hungry Caterpillar"),
];

export { reads, GenericRead };
export type { Read };
