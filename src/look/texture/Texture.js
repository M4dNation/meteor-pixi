/*
|--------------------------------------------------------------------------
| Texture
|--------------------------------------------------------------------------
|
| This file defines the Texture Object.
| This object build a PIXI.Texture for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

class Texture
{
	/**
	 * constructor
	 * This function is used in order to build a Texture.
	 * @param {PIXI.Texture | PIXI.BaseTexture}  pixiObj  The Pixi object to build the HandyPixi object.
	 */
	constructor(pixiObj = null)
	{
		if (pixiObj instanceof PIXI.Texture && pixiObj !== PIXI.Texture.EMPTY)
		{
			this._out = pixiObj;
		}
		else if (pixiObj instanceof PIXI.BaseTexture)
		{
			this._out = new PIXI.Texture(pixiObj);
		}
		else
		{
			this._out = PIXI.Texture.EMPTY.clone();
		}	

		this._transform = new PIXI.extras.TextureTransform(this.out);
	}

	/**
	* out
	* @getter
	* This function is a getter for the member _out.
	* @return  {PIXI.Texture} The PIXI Object used by this object. 
	*/
	get out()
	{
		return this._out;
	}

	/**
	 * frame
	 * @getter
	 * This function is a getter for the member frame.
	 * @return {Bounds} The frame specifies the region of the base texture that this texture uses.
	 */
	get frame()
	{
		return new Bounds(this._out.frame);
	}

	/**
	 * frame
	 * @setter
	 * This function is a setter for the member frame.
	 * @param {Bounds}  frame  The frame specifies the region of the base texture that this texture uses.
	 */
	set frame(frame)
	{
		if (!(frame instanceof Bounds))
			throw new TypeError("frame must be a Bounds.");

		this._out.frame = frame.out;
	}

	/**
	 * height
	 * @getter
	 * This function is a getter for the member height.
	 * @return {Number} The height of the Texture in pixels.
	 */
	get height()
	{
		return this._out.height;
	}

	/**
	 * height
	 * @setter
	 * This function is a setter for the member height.
	 * @param {Number}  height  The height of the Texture in pixels.
	 */
	set height(height)
	{
		if ({}.toString.call(height) !== "[object Number]")
			throw new TypeError("height must be a number.");

		this._out.height = height;
	}

	/**
	 * width
	 * @getter
	 * This function is a getter for the member width.
	 * @return {Number} The width of the Texture in pixels.
	 */
	get width()
	{
		return this._out.width;
	}

	/**
	 * width
	 * @setter
	 * This function is a setter for the member width.
	 * @param {Number}  width  The width of the Texture in pixels.
	 */
	set width(width)
	{
		if ({}.toString.call(width) !== "[object Number]")
			throw new TypeError("width must be a number.");

		this._out.width = width;
	}

	/**
	 * orig
	 * @getter
	 * This function is a getter for the member orig.
	 * @return {Bounds} This is the area of original texture, before it was put in atlas.
	 */
	get orig()
	{
		return new Bounds(this._out.orig);
	}

	/**
	 * orig
	 * @setter
	 * This function is a setter for the member orig.
	 * @param {Bounds}  orig  This is the area of original texture, before it was put in atlas.
	 */
	set orig(orig)
	{
		if (!(orig instanceof Bounds))
			throw new TypeError("orig must be a Bounds.");

		this._out.orig = orig.out;
	}

	/**
	 * trim
	 * @getter
	 * This function is a getter for the member trim.
	 * @return {Bounds} This is the trimmed area of original texture, before it was put in atlas.
	 */
	get trim()
	{
		return new Bounds(this._out.trim);
	}

	/**
	 * trim
	 * @setter
	 * This function is a setter for the member trim.
	 * @param {Bounds}  trim  This is the trimmed area of original texture, before it was put in atlas.
	 */
	set trim(trim)
	{
		if (!(trim instanceof Bounds))
			throw new TypeError("trim must be a Bounds.");

		this._out.trim = trim.out;
	}

	/**
	 * rotateCode
	 * @getter
	 * This function is a getter for the member rotateCode.
	 * @return {Number} Indicates whether the texture is rotated inside the atlas.  
	 */
	get rotateCode()
	{
		return this._out.rotate;
	}

	/**
	 * rotateCode
	 * @setter
	 * This function is a setter for the member rotateCode.
	 * @param {Number}  rotateCode  Indicates whether the texture is rotated inside the atlas.
	 * Can be used to rotate or mirror sprites. See PIXI.GroupD8 for explanation.
	 * Set to 2 to compensate for texture packer rotation.
	 * Set to 6 to compensate for spine packer rotation.
	 */
	set rotateCode(rotateCode)
	{
		if ({}.toString.call(rotateCode) !== "[object Number]")
			throw new TypeError("rotateCode must be a number.");

		this._out.rotate = rotateCode;
	}

	 /**
	 * clampMargin
	 * @getter
	 * This function is a getter for the member clampMargin.
	 * @return {Number} Margin for frame clamping. Works with TilingSprite and Mesh.
	 */
	
	/**
	 * clampMargin
	 * @setter
	 * This function is a setter for the member clampMargin.
	 * @param {Number}  clampMargin  Margin for frame clamping. Works with TilingSprite and Mesh.
	 * Change to -0.5 to add a pixel to the edge, recommended for transparent trimmed textures in atlas.
	 */
	
	/**
	 * clampOffset
	 * @getter
	 * This function is a getter for the member clampOffset.
	 * @return {Number} Offset for frame clamping. Works with TilingSprite and Mesh.
	 */
	
	/**
	 * clampOffset
	 * @setter
	 * This function is a setter for the member clampOffset.
	 * @param {Number}  clampOffset  Offset for frame clamping. Works with TilingSprite and Mesh.
	 * Change to 1.5 if you texture has repeated right and bottom lines, that leads to smoother borders.
	 */
	
	/**
	 * realHeight
	 * @getter
	 * This function is a getter for the member realHeight.
	 * @return {Number} The actual height of the source of this texture.
	 */
	
	/**
	 * realWidth
	 * @getter
	 * This function is a getter for the member realWidth.
	 * @return {Number} The actual width of the source of this texture.
	 */
	
	/**
	 * resolution
	 * @getter
	 * This function is a getter for the member resolution.
	 * @return {Number} The resolution / device pixel ratio of the texture.
	 */
	
	/**
	 * resolution
	 * @setter
	 * This function is a setter for the member resolution.
	 * @param {Number}  resolution  The resolution / device pixel ratio of the texture.
	 */
	
	/**
	 * scaleMode
	 * @getter
	 * This function is a getter for the member scaleMode.
	 * @return {Number} The scale mode to apply when scaling this texture.
	 */
	
	/**
	 * scaleMode
	 * @setter
	 * This function is a setter for the member scaleMode.
	 * @param {Number}  scaleMode  The scale mode to apply when scaling this texture.
	 */
	
	/**
	 * wrapMode
	 * @getter
	 * This function is a getter for the member wrapMode.
	 * @return {Number} WebGL Texture wrap mode.
	 */
	
	/**
	 * wrapMode
	 * @setter
	 * This function is a setter for the member wrapMode.
	 * @param {Number}  wrapMode  WebGL Texture wrap mode.
	 */
	
	/**
	 * sourceScale
	 * @getter
	 * This function is a getter for the member sourceScale.
	 * @return {Number} Scale for source image. Used with Svg images to scale them before rasterization.
	 */
	
	/**
	 * imageUrl
	 * @getter
	 * This function is a getter for the member imageUrl.
	 * @return {String} The image url of the texture.
	 */
	
	/**
	 * imageType
	 * @getter
	 * This function is a getter for the member imageType.
	 * @return {String} Type of image defined in source, eg. png or svg.
	 */
}

module.exports = {
	Texture: Texture,
};