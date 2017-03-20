/*
|--------------------------------------------------------------------------
| Ellipse
|--------------------------------------------------------------------------
|
| This file defines the Ellipse Object.
| This object build a PIXI.Graphics for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

const { Shape } = require("./Shape.js");

class Ellipse extends Shape
{
	/**
	 * constructor
	 * This function is used in order to build a Ellipse.
	 * @param {Number}  x  The X coordinate of the center of this Ellipse.
	 * @param {Number}  y  The Y coordinate of the center of this Ellipse.
	 * @param {Number}  width  The half width of this ellipse.
	 * @param {Number}  height  The half height of this ellipse.
	 * @param {Options}  options  Options for drawing.
	 * @param {PIXI.Ellipse}  x  The Pixi object to build the HandyPixi object.
	 */
	constructor(x = 0, y = 0, width = 0, height = 0, options = {})
	{
		super();

		if ({}.toString.call(y) !== "[object Number]")
			throw new TypeError("y must be a number.");

		if ({}.toString.call(width) !== "[object Number]")
			throw new TypeError("width must be a number.");

		if ({}.toString.call(height) !== "[object Number]")
			throw new TypeError("height must be a number.");

		if (!(typeof options === "object" && {}.toString.call(options) === "[object Object]"))
			throw new TypeError("options must be an object.");

		this._options = {};
		this.options = options;

		if (x instanceof PIXI.Ellipse)
		{
			this._properties = x;
		}
		else
		{
			if ({}.toString.call(x) !== "[object Number]")
				throw new TypeError("x must be a number.");

			this._properties = new PIXI.Ellipse(x, y, width, height);
		}

		this.beginFill(options.fillColor, options.fillAlpha);
		this.lineStyle({lineWidth: options.lineWidth, color: options.lineColor, alpha: options.lineAlpha});
		this._out.drawShape(this._properties);
		this.endFill();
	}

	/**
	 * width
	 * @getter
	 * This function is a getter for the member width.
	 * @return {Number} The half width of this ellipse. 
	 */
	get width()
	{
		return this._properties.width;
	}

	/**
	 * width
	 * @setter
	 * This function is a setter for the member width.
	 * @param {Number}  width  The half width of this ellipse. 
	 */
	set width(width)
	{
		if ({}.toString.call(width) !== "[object Number]")
			throw new TypeError("width must be a number.");

		this._properties.width = width;
		this.redraw();
	}

	/**
	 * height
	 * @getter
	 * This function is a getter for the member height.
	 * @return {Number} The half height of this ellipse. 
	 */
	get height()
	{
		return this._properties.height;
	}

	/**
	 * height
	 * @setter
	 * This function is a setter for the member height.
	 * @param {Number}  height  The half height of this ellipse. 
	 */
	set height(height)
	{
		if ({}.toString.call(height) !== "[object Number]")
			throw new TypeError("height must be a number.");

		this._properties.height = height;
		this.redraw();
	}

	/**
	 * x
	 * @getter
	 * This function is a getter for the member x.
	 * @return {Number} The X coordinate of the center of this Ellipse. 
	 */
	get x()
	{
		return this._properties.x;
	}

	/**
	 * x
	 * @setter
	 * This function is a setter for the member x.
	 * @param {Number}  x  The X coordinate of the center of this Ellipse. 
	 */
	set x(x)
	{
		if ({}.toString.call(x) !== "[object Number]")
			throw new TypeError("x must be a number.");

		this._properties.x = x;
		this.redraw();
	}

	/**
	 * y
	 * @getter
	 * This function is a getter for the member y.
	 * @return {Number} The Y coordinate of the center of this Ellipse. 
	 */
	get y()
	{
		return this._properties.y;
	}

	/**
	 * y
	 * @setter
	 * This function is a setter for the member y.
	 * @param {Number}  y  The Y coordinate of the center of this Ellipse. 
	 */
	set y(y)
	{
		if ({}.toString.call(y) !== "[object Number]")
			throw new TypeError("y must be a number.");

		this._properties.y = y;
		this.redraw();
	}

	/**
	 * options
	 * @getter
	 * This function is a getter for the member _options.
	 * @return {Object} Options for drawing.
	 */
	get options()
	{
		return this._options;
	}

	/**
	 * options
	 * @setter
	 * This function is a setter for the member _options.
	 * @param {Object}  options  Options for drawing.
	 */
	set options(options)
	{
		if (!(typeof options === "object" && {}.toString.call(options) === "[object Object]"))
			throw new TypeError("options must be an object.");

		if (options.fillColor !== undefined)
		{
			if ({}.toString.call(options.fillColor) !== "[object Number]")
				throw new TypeError("options.fillColor must be a number.");

			this._options.fillColor = options.fillColor;
		}
		
		if (options.fillAlpha !== undefined)
		{
			if ({}.toString.call(options.fillAlpha) !== "[object Number]")
				throw new TypeError("options.fillAlpha must be a number.");
			
			this._options.fillAlpha = options.fillAlpha;
		}

		if (options.lineWidth !== undefined)
		{
			if ({}.toString.call(options.lineWidth) !== "[object Number]")
				throw new TypeError("options.lineWidth must be a number.");
			
			this._options.lineWidth = options.lineWidth;
		}

		if (options.lineColor !== undefined)
		{
			if ({}.toString.call(options.lineColor) !== "[object Number]")
				throw new TypeError("options.lineColor must be a number.");
			
			this._options.lineColor = options.lineColor;
		}

		if (options.lineAlpha !== undefined)
		{
			if ({}.toString.call(options.lineAlpha) !== "[object Number]")
				throw new TypeError("options.lineAlpha must be a number.");
			
			this._options.lineAlpha = options.lineAlpha;
		}
	}

	/**
	 * redraw
	 * This function is used in order to clear and redraw the Ellipse.
	 */
	redraw()
	{
		this.clear();
		this.beginFill(this._options.fillColor, this._options.fillAlpha);
		this.lineStyle({lineWidth: this._options.lineWidth, color: this._options.lineColor, alpha: this._options.lineAlpha});
		this._out.drawShape(this._properties);
		this.endFill();
	}
}

module.exports = {
	Ellipse: Ellipse,
};