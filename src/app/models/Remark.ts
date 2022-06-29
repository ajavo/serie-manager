
export class Remarks {



//argument declaration
  private _id: number;
  private _date: Date ;
  private _author: string;
  private _contents: string;



constructor(id: number, date: Date | string, author: string, contents: string){
  this._id = id;
  this._date = typeof date === 'string'? new Date(date) : date;
  this._author = author;
  this._contents = contents;

}


    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter date
     * @return {Date}
     */
	public get date(): Date {
		return this._date;
	}

    /**
     * Getter author
     * @return {string}
     */
	public get author(): string {
		return this._author;
	}

    /**
     * Getter contents
     * @return {string}
     */
	public get contents(): string {
		return this._contents;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter date
     * @param {Date} value
     */
	public set date(value: Date) {
		this._date = value;
	}

    /**
     * Setter author
     * @param {string} value
     */
	public set author(value: string) {
		this._author = value;
	}

    /**
     * Setter contents
     * @param {string} value
     */
	public set contents(value: string) {
		this._contents = value;
	}

}
