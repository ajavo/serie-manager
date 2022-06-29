import { Remarks } from './Remark';


//argument declaration
export class Serie{

  private _id: number;
  private _title: string;
  private _dateBegin: Date;
  private _seasons: number;
  private _description: string;
  private _critical: string;
  private _img: string;
  private _remark: Remarks[];




  constructor(id: number, title: string, dateBegin: Date | string, seasons: number, description: string, critical: string, img: string,remark: Remarks[]) {
    this._id = id;
    this._title = title;
    this._dateBegin = typeof dateBegin === 'string'? new Date(dateBegin) : dateBegin;
    this._seasons = seasons;
    this._description = description;
    this._critical = critical;
    this._img = img;
    this._remark = remark



  }


    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter title
     * @return {string}
     */
	public get title(): string {
		return this._title;
	}

    /**
     * Getter dateBegin
     * @return {Date}
     */
	public get dateBegin(): Date {
		return this._dateBegin;
	}

    /**
     * Getter seasons
     * @return {number}
     */
	public get seasons(): number {
		return this._seasons;
	}

    /**
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
	}

    /**
     * Getter critical
     * @return {string}
     */
	public get critical(): string {
		return this._critical;
	}

    /**
     * Getter img
     * @return {string}
     */
	public get img(): string {
		return this._img;
	}

    /**
     * Getter remark
     * @return {Remarks[]}
     */
	public get remark(): Remarks[] {
		return this._remark;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter title
     * @param {string} value
     */
	public set title(value: string) {
		this._title = value;
	}

    /**
     * Setter dateBegin
     * @param {Date} value
     */
	public set dateBegin(value: Date) {
		this._dateBegin = value;
	}

    /**
     * Setter seasons
     * @param {number} value
     */
	public set seasons(value: number) {
		this._seasons = value;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
	}

    /**
     * Setter critical
     * @param {string} value
     */
	public set critical(value: string) {
		this._critical = value;
	}

    /**
     * Setter img
     * @param {string} value
     */
	public set img(value: string) {
		this._img = value;
	}

    /**
     * Setter remark
     * @param {Remarks[]} value
     */
	public set remark(value: Remarks[]) {
		this._remark = value;
	}

}
