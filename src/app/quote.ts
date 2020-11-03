export class Quote {
    showDescription: boolean;

    constructor(
        public id: number, 
        public quote: string, 
        public publisher: string,
        public author: string,
        public completeDate: Date,
        public upvote:number,
        public downvote:number,
        )
        {
         this.showDescription=false;
    }
}