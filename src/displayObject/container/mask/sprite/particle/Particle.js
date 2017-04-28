/*
|--------------------------------------------------------------------------
| Particle
|--------------------------------------------------------------------------
|
| This file defines the Particle Object.
| This object build a PIXI.particles.Particle for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

const { Sprite } = require("./../Sprite.js");
const { Point } = require("./../../../../../support/geometry/Point.js");
const { Container } = require("./../../../Container.js");
const { Texture } = require("./../../../../../graphic/texture/Texture.js");

class Particle extends Sprite
{
	/**
	 * constructor
	 * This function is used in order to build a Particle.
	 * @param {Emitter}  emitter  The emitter that controls this particle.
	 * @param {PIXI.particles.Particle}  emitter  The Pixi object to build the HandyPixi object.
	 */
	constructor(emitter)
	{
		super();

		if (emitter instanceof PIXI.particles.Particle)
		{
			this._out = emitter;
		}
		else 
		{
			if (!(emitter instanceof Emitter))
				throw new TypeError("emitter must be an Emitter.");

			this._out = new PIXI.particles.Particle(emitter.out);
		}
	}

	/**
	 * acceleration
	 * @getter
	 * This function is a getter for the member acceleration.
	 * @return {Point} The acceleration to apply to the particle.
	 */
	get acceleration()
	{
		return new Point(this._out.acceleration);
	}

	/**
	 * acceleration
	 * @setter
	 * This function is a setter for the member acceleration.
	 * @param {Point}  acceleration  The acceleration to apply to the particle.
	 */
	set acceleration(acceleration)
	{
		if (!(acceleration instanceof Point))
			throw new TypeError("acceleration must be a Point.");

		this._out.acceleration = acceleration.out;
	}

	/**
	 * age
	 * @getter
	 * This function is a getter for the member age.
	 * @return {Number} The current age of the particle, in seconds.
	 */
	get age()
	{
		return this._out.age;
	}

	/**
	 * age
	 * @setter
	 * This function is a setter for the member age.
	 * @param {Number}  age  The current age of the particle, in seconds.
	 */
	set age(age)
	{
		if ({}.toString.call(age) !== "[object Number]")
			throw new TypeError("age must be a number.");

		this._out.age = age;
	}

	/**
	 * ease
	 * @getter
	 * This function is a getter for the member ease.
	 * @return {Function} A simple easing function to be applied to all properties that are being interpolated.
	 */
	get ease()
	{
		return this._out.ease;
	}

	/**
	 * ease
	 * @setter
	 * This function is a setter for the member ease.
	 * @param {Function}  ease  A simple easing function to be applied to all properties that are being interpolated.
	 */
	set ease(ease)
	{
		if ({}.toString.call(ease) !== "[object Function]")
			throw new TypeError("ease must be a function.");

		this._out.ease = ease;
	}

	/**
	 * emitter
	 * @getter
	 * This function is a getter for the member emitter.
	 * @return {Emitter} The emitter that controls this particle.
	 */
	get emitter()
	{
		return new Emitter(this._out.emitter);
	}

	/**
	 * emitter
	 * @setter
	 * This function is a setter for the member emitter.
	 * @param {Emitter}  emitter  The emitter that controls this particle.
	 */
	set emitter(emitter)
	{
		if (!(emitter instanceof Emitter))
			throw new TypeError("emitter must be a Emitter.");

		this._out.emitter = emitter.out;
	}

	/**
	 * endAlpha
	 * @getter
	 * This function is a getter for the member endAlpha.
	 * @return {Number} The alpha of the particle at the end of its life.
	 */
	get endAlpha()
	{
		return this._out.endAlpha;
	}

	/**
	 * endAlpha
	 * @setter
	 * This function is a setter for the member endAlpha.
	 * @param {Number}  endAlpha  The alpha of the particle at the end of its life.
	 */
	set endAlpha(endAlpha)
	{
		if ({}.toString.call(endAlpha) !== "[object Number]")
			throw new TypeError("endAlpha must be a number.");

		this._out.endAlpha = endAlpha;
	}

	/**
	 * endColor
	 * @getter
	 * This function is a getter for the member endColor.
	 * @return {Number[3]} The tint of the particle at the end of its life.
	 */
	get endColor()
	{
		return this._out.endColor;
	}

	/**
	 * endColor
	 * @setter
	 * This function is a setter for the member endColor.
	 * @param {Number[3]}  endColor  The tint of the particle at the end of its life.
	 */
	set endColor(endColor)
	{
		if (!Array.isArray(endColor) || endColor.length != 3)
			throw new TypeError("endColor must be an Array, its length must be three.");

		for (let i = 0, l = endColor.length; i < l; i++)
		{
			if ({}.toString.call(endColor[i]) !== "[object Number]")
				throw new TypeError("endColor must be an Array of Numbers.");
		}

		this._out.endColor = endColor;
	}

	/**
	 * endScale
	 * @getter
	 * This function is a getter for the member endScale.
	 * @return {Number} The scale of the particle at the end of its life.
	 */
	get endScale()
	{
		return this._out.endScale;
	}

	/**
	 * endScale
	 * @setter
	 * This function is a setter for the member endScale.
	 * @param {Number}  endScale  The scale of the particle at the end of its life.
	 */
	set endScale(endScale)
	{
		if ({}.toString.call(endScale) !== "[object Number]")
			throw new TypeError("endScale must be a number.");

		this._out.endScale = endScale;
	}

	/**
	 * endSpeed
	 * @getter
	 * This function is a getter for the member endSpeed.
	 * @return {Number} The speed of the particle at the end of its life.
	 */
	get endSpeed()
	{
		return this._out.endSpeed;
	}

	/**
	 * endSpeed
	 * @setter
	 * This function is a setter for the member endSpeed.
	 * @param {Number}  endSpeed  The speed of the particle at the end of its life.
	 */
	set endSpeed(endSpeed)
	{
		if ({}.toString.call(endSpeed) !== "[object Number]")
			throw new TypeError("endSpeed must be a number.");

		this._out.endSpeed = endSpeed;
	}

	/**
	 * extraData
	 * @getter
	 * This function is a getter for the member extraData.
	 * @return {Object} Extra data that the emitter passes along for custom particles.
	 */
	get extraData()
	{
		return this._out.extraData;
	}

	/**
	 * extraData
	 * @setter
	 * This function is a setter for the member extraData.
	 * @param {Object}  extraData  Extra data that the emitter passes along for custom particles.
	 */
	set extraData(extraData)
	{
		if (!(typeof extraData === "object" && {}.toString.call(extraData) === "[object Object]"))
			throw new TypeError("extraData must be an object.");

		this._out.extraData = extraData;
	}

	/**
	 * maxLife
	 * @getter
	 * This function is a getter for the member maxLife.
	 * @return {Number} The maximum lifetime of this particle, in seconds.
	 */
	get maxLife()
	{
		return this._out.maxLife;
	}

	/**
	 * maxLife
	 * @setter
	 * This function is a setter for the member maxLife.
	 * @param {Number}  maxLife  The maximum lifetime of this particle, in seconds.
	 */
	set maxLife(maxLife)
	{
		if ({}.toString.call(maxLife) !== "[object Number]")
			throw new TypeError("maxLife must be a number.");

		this._out.maxLife = maxLife;
	}

	/**
	 * maxSpeed
	 * @getter
	 * This function is a getter for the member maxSpeed.
	 * @return {Number} The maximum speed allowed for accelerating particles. Negative values, values of 0 or NaN will disable the maximum speed.
	 */
	get maxSpeed()
	{
		return this._out.maxSpeed;
	}

	/**
	 * maxSpeed
	 * @setter
	 * This function is a setter for the member maxSpeed.
	 * @param {Number}  maxSpeed  The maximum speed allowed for accelerating particles. Negative values, values of 0 or NaN will disable the maximum speed.
	 */
	set maxSpeed(maxSpeed)
	{
		if ({}.toString.call(maxSpeed) !== "[object Number]")
			throw new TypeError("maxSpeed must be a number.");

		this._out.maxSpeed = maxSpeed;
	}

	/**
	 * startAlpha
	 * @getter
	 * This function is a getter for the member startAlpha.
	 * @return {Number} The alpha of the particle at the start of its life.
	 */
	get startAlpha()
	{
		return this._out.startAlpha;
	}

	/**
	 * startAlpha
	 * @setter
	 * This function is a setter for the member startAlpha.
	 * @param {Number}  startAlpha  The alpha of the particle at the start of its life.
	 */
	set startAlpha(startAlpha)
	{
		if ({}.toString.call(startAlpha) !== "[object Number]")
			throw new TypeError("startAlpha must be a number.");

		this._out.startAlpha = startAlpha;
	}

	/**
	 * startColor
	 * @getter
	 * This function is a getter for the member startColor.
	 * @return {Number[3]} The tint of the particle at the start of its life.
	 */
	get startColor()
	{
		return this._out.startColor;
	}

	/**
	 * startColor
	 * @setter
	 * This function is a setter for the member startColor.
	 * @param {Number[3]}  startColor  The tint of the particle at the start of its life.
	 */
	set startColor(startColor)
	{
		if (!Array.isArray(startColor) || startColor.length != 3)
			throw new TypeError("startColor must be an Array, its length must be three.");

		for (let i = 0, l = startColor.length; i < l; i++)
		{
			if ({}.toString.call(startColor[i]) !== "[object Number]")
				throw new TypeError("startColor must be an Array of Numbers.");
		}

		this._out.startColor = startColor;
	}

	/**
	 * startScale
	 * @getter
	 * This function is a getter for the member startScale.
	 * @return {Number} The scale of the particle at the start of its life.
	 */
	get startScale()
	{
		return this._out.startScale;
	}

	/**
	 * startScale
	 * @setter
	 * This function is a setter for the member startScale.
	 * @param {Number}  startScale  The scale of the particle at the start of its life.
	 */
	set startScale(startScale)
	{
		if ({}.toString.call(startScale) !== "[object Number]")
			throw new TypeError("startScale must be a number.");

		this._out.startScale = startScale;
	}

	/**
	 * startSpeed
	 * @getter
	 * This function is a getter for the member startSpeed.
	 * @return {Number} The speed of the particle at the start of its life.
	 */
	get startSpeed()
	{
		return this._out.startSpeed;
	}

	/**
	 * startSpeed
	 * @setter
	 * This function is a setter for the member startSpeed.
	 * @param {Number}  startSpeed  The speed of the particle at the start of its life.
	 */
	set startSpeed(startSpeed)
	{
		if ({}.toString.call(startSpeed) !== "[object Number]")
			throw new TypeError("startSpeed must be a number.");

		this._out.startSpeed = startSpeed;
	}

	/**
	 * velocity
	 * @getter
	 * This function is a getter for the member velocity.
	 * @return {Point} The velocity of the particle. Speed may change, but the angle also contained in velocity is constant.
	 */
	get velocity()
	{
		return new Point(this._out.velocity);
	}

	/**
	 * velocity
	 * @setter
	 * This function is a setter for the member velocity.
	 * @param {Point}  velocity  The velocity of the particle. Speed may change, but the angle also contained in velocity is constant.
	 */
	set velocity(velocity)
	{
		if (!(velocity instanceof Point))
			throw new TypeError("velocity must be a Point.");

		this._out.velocity = velocity.out;
	}

	/**
	 * destroy
	 * This function is used in order to destroy the particle, removing references and preventing future use.
	 */
	destroy()
	{
		this._out.destroy();
	}

	/**
	 * init
	 * This function is used in order to initialize the particle for use, based on the properties that have to have been set already on the particle.
	 */
	init()
	{
		this._out.init();
	}

	/**
	 * kill
	 * This function is used in order to kill the particle, removing it from the display list and telling the emitter to recycle it. 
	 */
	kill()
	{
		this._out.kill();
	}

	/**
	 * update
	 * This function is used in order to update the particle.
	 * @param {Number}  delta  Time elapsed since the previous frame, in seconds.
	 * @return {Number} The standard interpolation multiplier (0-1) used for all relevant particle properties. 
	 * A value of -1 means the particle died of old age instead.
	 */
	update(delta)
	{
		if ({}.toString.call(delta) !== "[object Number]")
			throw new TypeError("delta must be a number.");

		return this._out.update(delta);
	}
};

/*
|--------------------------------------------------------------------------
| Emitter
|--------------------------------------------------------------------------
|
| This file defines the Emitter Object.
| This object build a PIXI.particles.Emitter for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

class Emitter
{
	/**
	 * constructor
	 * This function is used in order to build an Emitter.
	 * @param {Container}  parent  The parent of all emitted particles.
	 * @param {Texture[]}  textures  An array of textures to use for the particles.
	 * @param {Object}  config  A configuration object containing settings for the emitter.
	 * @param {PIXI.particles.Emitter}  parent  The Pixi object to build the HandyPixi object.
	 */
	constructor(parent, textures, config = undefined)
	{
		if (parent instanceof PIXI.particles.Emitter)
		{
			this._out = parent;
		}
		else 
		{
			if (!(parent instanceof Container))
				throw new TypeError("parent must be a Container.");

			if (!(typeof config === "object" && {}.toString.call(config) === "[object Object]" || config === undefined))
				throw new TypeError("config must be an object.");

			if (!Array.isArray(textures))
			{
				throw new TypeError("textures must be an array.");
			}
			else
			{
				outTextures = [];

				for(let i = 0, l = textures.length; i < l; i++)
				{
					if (!(textures[i] instanceof Texture))
						throw new TypeError("Can't apply the "+ i +" element, it must be a Texture");

					outTextures = textures[i].out;
				}
			}

			this._out = new PIXI.particles.Emitter(parent.out, outTextures, config);
		}
	}

	/**
	 * out
	 * @getter
	 * This function is a getter for the member _out.
	 * @return  {PIXI.particles.Emitter} The PIXI Object used by this object. 
	 */
	get out()
	{
		return this._out;
	}

	/**
	 * acceleration
	 * @getter
	 * This function is a getter for the member acceleration.
	 * @return {Point} Acceleration to apply to particles. Using this disables any interpolation of particle speed. 
	 * If the particles do not have a rotation speed, then they will be rotated to match the direction of travel.
	 */
	get acceleration()
	{
		if (this._out.acceleration === null)
			return null;

		return new Point(this._out.acceleration);
	}

	/**
	 * acceleration
	 * @setter
	 * This function is a setter for the member acceleration.
	 * @param {Point}  acceleration  Acceleration to apply to particles. Using this disables any interpolation of particle speed. 
	 * If the particles do not have a rotation speed, then they will be rotated to match the direction of travel.
	 */
	set acceleration(acceleration)
	{
		if (!(acceleration instanceof Point))
			throw new TypeError("acceleration must be a Point.");

		this._out.acceleration = acceleration.out;
	}

	/**
	 * addAtBack
	 * @getter
	 * This function is a getter for the member addAtBack.
	 * @return {Boolean} If particles should be added at the back of the display list instead of the front.
	 */
	get addAtBack()
	{
		return this._out.addAtBack;
	}

	/**
	 * addAtBack
	 * @setter
	 * This function is a setter for the member addAtBack.
	 * @param {Boolean}  addAtBack  If particles should be added at the back of the display list instead of the front.
	 */
	set addAtBack(addAtBack)
	{
		if ({}.toString.call(addAtBack) !== "[object Boolean]")
			throw new TypeError("addAtBack must be a boolean.");

		this._out.addAtBack = addAtBack;
	}

	/**
	 * angleStart
	 * @getter
	 * This function is a getter for the member angleStart.
	 * @return {Number} Angle at which to start spawning particles in a burst.
	 */
	get angleStart()
	{
		return this._out.angleStart;
	}

	/**
	 * angleStart
	 * @setter
	 * This function is a setter for the member angleStart.
	 * @param {Number}  angleStart  Angle at which to start spawning particles in a burst.
	 */
	set angleStart(angleStart)
	{
		if ({}.toString.call(angleStart) !== "[object Number]")
			throw new TypeError("angleStart must be a number.");

		this._out.angleStart = angleStart;
	}

	/**
	 * autoUpdate
	 * This function is used in order to automacally update the particles with the shared ticker.
	 * @param {Boolean}  value  If the particles must be auto-updated or not.
	 */
	autoUpdate(value = true)
	{
		if ({}.toString.call(value) !== "[object Boolean]")
			throw new TypeError("value must be a boolean.");

		this._out.autoUpdate = value;
	}

	/**
	 * ease
	 * @getter
	 * This function is a getter for the member ease.
	 * @return {Function} An easing function for nonlinear interpolation of values. 
	 * Accepts a single parameter of time as a value from 0-1, inclusive. 
	 * Expected outputs are values from 0-1, inclusive.
	 */
	get ease()
	{
		return this._out.customEase;
	}

	/**
	 * ease
	 * @setter
	 * This function is a setter for the member ease.
	 * @param {Function}  ease  An easing function for nonlinear interpolation of values. 
	 * Accepts a single parameter of time as a value from 0-1, inclusive. 
	 * Expected outputs are values from 0-1, inclusive.
	 */
	set ease(ease)
	{
		if ({}.toString.call(ease) !== "[object Function]")
			throw new TypeError("ease must be a function.");

		this._out.customEase = ease;
	}

	/**
	 * emit
	 * This function is used in order to allow emitting particles during update calls.
	 * @param {Boolean}  value  Setting this to false stops new particles from being created, but allows existing ones to die out.
	 */
	emit(value = true)
	{
		if ({}.toString.call(value) !== "[object Boolean]")
			throw new TypeError("value must be a boolean.");

		this._out.emit = value;
	}

	/**
	 * emitterLifetime
	 * @getter
	 * This function is a getter for the member emitterLifetime.
	 * @return {Number} The amount of time in seconds to emit for before setting emit to false. A value of -1 is an unlimited amount of time.
	 */
	get emitterLifetime()
	{
		return this._out.emitterLifetime;
	}

	/**
	 * emitterLifetime
	 * @setter
	 * This function is a setter for the member emitterLifetime.
	 * @param {Number}  emitterLifetime  The amount of time in seconds to emit for before setting emit to false. A value of -1 is an unlimited amount of time.
	 */
	set emitterLifetime(emitterLifetime)
	{
		if ({}.toString.call(emitterLifetime) !== "[object Number]")
			throw new TypeError("emitterLifetime must be a number.");

		this._out.emitterLifetime = emitterLifetime;
	}

	/**
	 * endAlpha
	 * @getter
	 * This function is a getter for the member endAlpha.
	 * @return {Number} The ending alpha of all particles.
	 */
	get endAlpha()
	{
		return this._out.endAlpha;
	}

	/**
	 * endAlpha
	 * @setter
	 * This function is a setter for the member endAlpha.
	 * @param {Number}  endAlpha  The ending alpha of all particles.
	 */
	set endAlpha(endAlpha)
	{
		if ({}.toString.call(endAlpha) !== "[object Number]")
			throw new TypeError("endAlpha must be a number.");

		this._out.endAlpha = endAlpha;
	}

	/**
	 * endColor
	 * @getter
	 * This function is a getter for the member endColor.
	 * @return {Number[3]} The ending color of all particles, as red, green, and blue uints from 0-255.
	 */
	get endColor()
	{
		return this._out.endColor;
	}

	/**
	 * endColor
	 * @setter
	 * This function is a setter for the member endColor.
	 * @param {Number[3]}  endColor  The ending color of all particles, as red, green, and blue uints from 0-255.
	 */
	set endColor(endColor)
	{
		if (!Array.isArray(endColor) || endColor.length != 3)
			throw new TypeError("endColor must be an Array, its length must be three.");

		for (let i = 0, l = endColor.length; i < l; i++)
		{
			if ({}.toString.call(endColor[i]) !== "[object Number]")
				throw new TypeError("endColor must be an Array of Numbers.");
		}

		this._out.endColor = endColor;
	}

	/**
	 * endScale
	 * @getter
	 * This function is a getter for the member endScale.
	 * @return {Number} The ending scale of all particles.
	 */
	get endScale()
	{
		return this._out.endScale;
	}

	/**
	 * endScale
	 * @setter
	 * This function is a setter for the member endScale.
	 * @param {Number}  endScale  The ending scale of all particles.
	 */
	set endScale(endScale)
	{
		if ({}.toString.call(endScale) !== "[object Number]")
			throw new TypeError("endScale must be a number.");

		this._out.endScale = endScale;
	}

	/**
	 * endSpeed
	 * @getter
	 * This function is a getter for the member endSpeed.
	 * @return {Number} The ending speed of all particles.
	 */
	get endSpeed()
	{
		return this._out.endSpeed;
	}

	/**
	 * endSpeed
	 * @setter
	 * This function is a setter for the member endSpeed.
	 * @param {Number}  endSpeed  The ending speed of all particles.
	 */
	set endSpeed(endSpeed)
	{
		if ({}.toString.call(endSpeed) !== "[object Number]")
			throw new TypeError("endSpeed must be a number.");

		this._out.endSpeed = endSpeed;
	}

	/**
	 * extraData
	 * @getter
	 * This function is a getter for the member extraData.
	 * @return {Object} Extra data for use in custom particles. 
	 * The emitter doesn't look inside, but passes it on to the particle to use in init().
	 */
	get extraData()
	{
		return this._out.extraData;
	}

	/**
	 * extraData
	 * @setter
	 * This function is a setter for the member extraData.
	 * @param {Object}  extraData  Extra data for use in custom particles. 
	 * The emitter doesn't look inside, but passes it on to the particle to use in init().
	 */
	set extraData(extraData)
	{
		if (!(typeof extraData === "object" && {}.toString.call(extraData) === "[object Object]"))
			throw new TypeError("extraData must be an object.");

		this._out.extraData = extraData;
	}

	/**
	 * frequency
	 * @getter
	 * This function is a getter for the member frequency.
	 * @return {Number} Time between particle spawns in seconds. 
	 * If this value is not a number greater than 0, it will be set to 1 (particle per second) to prevent infinite loops. 
	 */
	get frequency()
	{
		return this._out.frequency;
	}

	/**
	 * frequency
	 * @setter
	 * This function is a setter for the member frequency.
	 * @param {Number}  frequency  Time between particle spawns in seconds. 
	 * If this value is not a number greater than 0, it will be set to 1 (particle per second) to prevent infinite loops. 
	 */
	set frequency(frequency)
	{
		if ({}.toString.call(frequency) !== "[object Number]")
			throw new TypeError("frequency must be a number.");

		this._out.frequency = frequency;
	}

	/**
	 * maxLifetime
	 * @getter
	 * This function is a getter for the member maxLifetime.
	 * @return {Number} The maximum lifetime for a particle, in seconds.
	 */
	get maxLifetime()
	{
		return this._out.maxLifetime;
	}

	/**
	 * maxLifetime
	 * @setter
	 * This function is a setter for the member maxLifetime.
	 * @param {Number}  maxLifetime  The maximum lifetime for a particle, in seconds.
	 */
	set maxLifetime(maxLifetime)
	{
		if ({}.toString.call(maxLifetime) !== "[object Number]")
			throw new TypeError("maxLifetime must be a number.");

		this._out.maxLifetime = maxLifetime;
	}

	/**
	 * maxParticles
	 * @getter
	 * This function is a getter for the member maxParticles.
	 * @return {Number} Maximum number of particles to keep alive at a time. 
	 * If this limit is reached, no more particles will spawn until some have died.
	 */
	get maxParticles()
	{
		return this._out.maxParticles;
	}

	/**
	 * maxParticles
	 * @setter
	 * This function is a setter for the member maxParticles.
	 * @param {Number}  maxParticles  Maximum number of particles to keep alive at a time. 
	 * If this limit is reached, no more particles will spawn until some have died.
	 */
	set maxParticles(maxParticles)
	{
		if ({}.toString.call(maxParticles) !== "[object Number]")
			throw new TypeError("maxParticles must be a number.");

		this._out.maxParticles = maxParticles;
	}

	/**
	 * maxRotationSpeed
	 * @getter
	 * This function is a getter for the member maxRotationSpeed.
	 * @return {Number} The maximum rotation speed for a particle, in degrees per second.
	 * This only visually spins the particle, it does not change direction of movement.
	 */
	get maxRotationSpeed()
	{
		return this._out.maxRotationSpeed;
	}

	/**
	 * maxRotationSpeed
	 * @setter
	 * This function is a setter for the member maxRotationSpeed.
	 * @param {Number}  maxRotationSpeed  The maximum rotation speed for a particle, in degrees per second.
	 * This only visually spins the particle, it does not change direction of movement.
	 */
	set maxRotationSpeed(maxRotationSpeed)
	{
		if ({}.toString.call(maxRotationSpeed) !== "[object Number]")
			throw new TypeError("maxRotationSpeed must be a number.");

		this._out.maxRotationSpeed = maxRotationSpeed;
	}

	/**
	 * maxSpeed
	 * @getter
	 * This function is a getter for the member maxSpeed.
	 * @return {Number} The maximum speed allowed for accelerating particles. Negative values, values of 0 or NaN will disable the maximum speed.
	 */
	get maxSpeed()
	{
		return this._out.maxSpeed;
	}

	/**
	 * maxSpeed
	 * @setter
	 * This function is a setter for the member maxSpeed.
	 * @param {Number}  maxSpeed  The maximum speed allowed for accelerating particles. Negative values, values of 0 or NaN will disable the maximum speed.
	 */
	set maxSpeed(maxSpeed)
	{
		if ({}.toString.call(maxSpeed) !== "[object Number]")
			throw new TypeError("maxSpeed must be a number.");

		this._out.maxSpeed = maxSpeed;
	}

	/**
	 * maxStartRotation
	 * @getter
	 * This function is a getter for the member maxStartRotation.
	 * @return {Number} The maximum start rotation for a particle, in degrees. This value is ignored if the spawn type is "burst" or "arc".
	 */
	get maxStartRotation()
	{
		return this._out.maxStartRotation;
	}

	/**
	 * maxStartRotation
	 * @setter
	 * This function is a setter for the member maxStartRotation.
	 * @param {Number}  maxStartRotation  The maximum start rotation for a particle, in degrees. This value is ignored if the spawn type is "burst" or "arc".
	 */
	set maxStartRotation(maxStartRotation)
	{
		if ({}.toString.call(maxStartRotation) !== "[object Number]")
			throw new TypeError("maxStartRotation must be a number.");

		this._out.maxStartRotation = maxStartRotation;
	}

	/**
	 * minimumScaleMultiplier
	 * @getter
	 * This function is a getter for the member minimumScaleMultiplier.
	 * @return {Number} A minimum multiplier for the scale of a particle at both start and end. 
	 * A value between minimumScaleMultiplier and 1 is randomly generated and multiplied with startScale and endScale to provide the actual startScale and endScale for each particle.
	 */
	get minimumScaleMultiplier()
	{
		return this._out.minimumScaleMultiplier;
	}

	/**
	 * minimumScaleMultiplier
	 * @setter
	 * This function is a setter for the member minimumScaleMultiplier.
	 * @param {Number}  minimumScaleMultiplier  A minimum multiplier for the scale of a particle at both start and end. 
	 * A value between minimumScaleMultiplier and 1 is randomly generated and multiplied with startScale and endScale to provide the actual startScale and endScale for each particle.
	 */
	set minimumScaleMultiplier(minimumScaleMultiplier)
	{
		if ({}.toString.call(minimumScaleMultiplier) !== "[object Number]")
			throw new TypeError("minimumScaleMultiplier must be a number.");

		this._out.minimumScaleMultiplier = minimumScaleMultiplier;
	}

	/**
	 * minimumSpeedMultiplier
	 * @getter
	 * This function is a getter for the member minimumSpeedMultiplier.
	 * @return {Number} A minimum multiplier for the speed of a particle at both start and end. 
	 * A value between minimumSpeedMultiplier and 1 is randomly generated and multiplied with startSpeed and endSpeed to provide the actual startSpeed and endSpeed for each particle.
	 */
	get minimumSpeedMultiplier()
	{
		return this._out.minimumSpeedMultiplier;
	}

	/**
	 * minimumSpeedMultiplier
	 * @setter
	 * This function is a setter for the member minimumSpeedMultiplier.
	 * @param {Number}  minimumSpeedMultiplier  A minimum multiplier for the speed of a particle at both start and end. 
	 * A value between minimumSpeedMultiplier and 1 is randomly generated and multiplied with startSpeed and endSpeed to provide the actual startSpeed and endSpeed for each particle.
	 */
	set minimumSpeedMultiplier(minimumSpeedMultiplier)
	{
		if ({}.toString.call(minimumSpeedMultiplier) !== "[object Number]")
			throw new TypeError("minimumSpeedMultiplier must be a number.");

		this._out.minimumSpeedMultiplier = minimumSpeedMultiplier;
	}

	/**
	 * minLifetime
	 * @getter
	 * This function is a getter for the member minLifetime.
	 * @return {Number} The minimum lifetime for a particle, in seconds.
	 */
	get minLifetime()
	{
		return this._out.minLifetime;
	}

	/**
	 * minLifetime
	 * @setter
	 * This function is a setter for the member minLifetime.
	 * @param {Number}  minLifetime  The minimum lifetime for a particle, in seconds.
	 */
	set minLifetime(minLifetime)
	{
		if ({}.toString.call(minLifetime) !== "[object Number]")
			throw new TypeError("minLifetime must be a number.");

		this._out.minLifetime = minLifetime;
	}

	/**
	 * minRotationSpeed
	 * @getter
	 * This function is a getter for the member minRotationSpeed.
	 * @return {Number} The minimum rotation speed for a particle, in degrees per second.
	 * This only visually spins the particle, it does not change direction of movement.
	 */
	get minRotationSpeed()
	{
		return this._out.minRotationSpeed;
	}

	/**
	 * minRotationSpeed
	 * @setter
	 * This function is a setter for the member minRotationSpeed.
	 * @param {Number}  minRotationSpeed  The minimum rotation speed for a particle, in degrees per second.
	 * This only visually spins the particle, it does not change direction of movement.
	 */
	set minRotationSpeed(minRotationSpeed)
	{
		if ({}.toString.call(minRotationSpeed) !== "[object Number]")
			throw new TypeError("minRotationSpeed must be a number.");

		this._out.minRotationSpeed = minRotationSpeed;
	}

	/**
	 * minStartRotation
	 * @getter
	 * This function is a getter for the member minStartRotation.
	 * @return {Number} The minimum start rotation for a particle, in degrees. This value is ignored if the spawn type is "burst" or "arc".
	 */
	get minStartRotation()
	{
		return this._out.minStartRotation;
	}

	/**
	 * minStartRotation
	 * @setter
	 * This function is a setter for the member minStartRotation.
	 * @param {Number}  minStartRotation  The minimum start rotation for a particle, in degrees. This value is ignored if the spawn type is "burst" or "arc".
	 */
	set minStartRotation(minStartRotation)
	{
		if ({}.toString.call(minStartRotation) !== "[object Number]")
			throw new TypeError("minStartRotation must be a number.");

		this._out.minStartRotation = minStartRotation;
	}

	/**
	 * noRotation
	 * @getter
	 * This function is a getter for the member noRotation.
	 * @return {Boolean} If no particle rotation should occur. Starting rotation will still affect the direction in which particles move. 
	 * If the rotation speed is set, then this will be ignored.
	 */
	get noRotation()
	{
		return this._out.noRotation;
	}

	/**
	 * noRotation
	 * @setter
	 * This function is a setter for the member noRotation.
	 * @param {Boolean}  noRotation  If no particle rotation should occur. Starting rotation will still affect the direction in which particles move. 
	 * If the rotation speed is set, then this will be ignored.
	 */
	set noRotation(noRotation)
	{
		if ({}.toString.call(noRotation) !== "[object Boolean]")
			throw new TypeError("noRotation must be a boolean.");

		this._out.noRotation = noRotation;
	}

	/**
	 * ownerPos
	 * @getter
	 * This function is a getter for the member ownerPos.
	 * @return {Point} The world position of the emitter's owner, to add spawnPos to when spawning particles. To change this, use updateOwnerPos().
	 */
	get ownerPos()
	{
		if (this._out.ownerPos === null)
			return null;

		return new Point(this._out.ownerPos);
	}

	/**
	 * parent
	 * @getter
	 * This function is a getter for the member parent.
	 * @return {Container} The display object to add particles to. Settings this will dump any active particles.
	 */
	get parent()
	{
		return new Container(this._out.parent);
	}

	/**
	 * parent
	 * @setter
	 * This function is a setter for the member parent.
	 * @param {Container}  parent  The display object to add particles to. Settings this will dump any active particles.
	 */
	set parent(parent)
	{
		if (!(parent instanceof Container))
			throw new TypeError("parent must be a Container.");

		this._out.parent = parent.out;
	}

	/**
	 * particleBlendMode
	 * @getter
	 * This function is a getter for the member particleBlendMode.
	 * @return {Number} The blend mode for all particles.
	 */
	get particleBlendMode()
	{
		return this._out.particleBlendMode;
	}

	/**
	 * particleBlendMode
	 * @setter
	 * This function is a setter for the member particleBlendMode.
	 * @param {Number}  particleBlendMode  The blend mode for all particles.
	 */
	set particleBlendMode(particleBlendMode)
	{
		if ({}.toString.call(particleBlendMode) !== "[object Number]")
			throw new TypeError("particleBlendMode must be a number.");

		this._out.particleBlendMode = particleBlendMode;
	}

	/**
	 * particleConstructor
	 * @getter
	 * This function is a getter for the member particleConstructor.
	 * @return {Function} The constructor used to create new particles. The default is the built in Particle class. 
	 * Setting this will dump any active or pooled particles, if the emitter has already been used.
	 */
	get particleConstructor()
	{
		return this._out.particleConstructor;
	}

	/**
	 * particleConstructor
	 * @setter
	 * This function is a setter for the member particleConstructor.
	 * @param {Function}  particleConstructor  The constructor used to create new particles. The default is the built in Particle class. 
	 * Setting this will dump any active or pooled particles, if the emitter has already been used.
	 */
	set particleConstructor(particleConstructor)
	{
		if ({}.toString.call(particleConstructor) !== "[object Function]")
			throw new TypeError("particleConstructor must be a function.");

		this._out.particleConstructor = particleConstructor;
	}

	/**
	 * particleCount
	 * @getter
	 * This function is a getter for the member particleCount.
	 * @return {Number} The current number of active particles.
	 */
	get particleCount()
	{
		return this._out.particleCount;
	}

	/**
	 * particleSpacing
	 * @getter
	 * This function is a getter for the member particleSpacing.
	 * @return {Number} Spacing between particles in a burst. 0 gives a random angle for each particle.
	 */
	get particleSpacing()
	{
		return this._out.particleSpacing;
	}

	/**
	 * particleSpacing
	 * @setter
	 * This function is a setter for the member particleSpacing.
	 * @param {Number}  particleSpacing  Spacing between particles in a burst. 0 gives a random angle for each particle.
	 */
	set particleSpacing(particleSpacing)
	{
		if ({}.toString.call(particleSpacing) !== "[object Number]")
			throw new TypeError("particleSpacing must be a number.");

		this._out.particleSpacing = particleSpacing;
	}

	/**
	 * particlesPerWave
	 * @getter
	 * This function is a getter for the member particlesPerWave.
	 * @return {Number} Number of particles to spawn each wave in a burst.
	 */
	get particlesPerWave()
	{
		return this._out.particlesPerWave;
	}

	/**
	 * particlesPerWave
	 * @setter
	 * This function is a setter for the member particlesPerWave.
	 * @param {Number}  particlesPerWave  Number of particles to spawn each wave in a burst.
	 */
	set particlesPerWave(particlesPerWave)
	{
		if ({}.toString.call(particlesPerWave) !== "[object Number]")
			throw new TypeError("particlesPerWave must be a number.");

		this._out.particlesPerWave = particlesPerWave;
	}

	/**
	 * rotation
	 * @getter
	 * This function is a getter for the member rotation.
	 * @return {Number} Rotation of the emitter or emitter's owner in degrees. This is added to the calculated spawn angle.
	 */
	get rotation()
	{
		return this._out.rotation;
	}

	/**
	 * spawnPos
	 * @getter
	 * This function is a getter for the member spawnPos.
	 * @return {Point} Position at which to spawn particles, relative to the emitter's owner's origin.
	 */
	get spawnPos()
	{
		return this._out.spawnPos;
	}

	/**
	 * startAlpha
	 * @getter
	 * This function is a getter for the member startAlpha.
	 * @return {Number} The starting alpha of all particles.
	 */
	get startAlpha()
	{
		return this._out.startAlpha;
	}

	/**
	 * startAlpha
	 * @setter
	 * This function is a setter for the member startAlpha.
	 * @param {Number}  startAlpha  The starting alpha of all particles.
	 */
	set startAlpha(startAlpha)
	{
		if ({}.toString.call(startAlpha) !== "[object Number]")
			throw new TypeError("startAlpha must be a number.");

		this._out.startAlpha = startAlpha;
	}

	/**
	 * startColor
	 * @getter
	 * This function is a getter for the member startColor.
	 * @return {Number[3]} The starting color of all particles, as red, green, and blue uints from 0-255.
	 */
	get startColor()
	{
		return this._out.startColor;
	}

	/**
	 * startColor
	 * @setter
	 * This function is a setter for the member startColor.
	 * @param {Number[3]}  startColor  The starting color of all particles, as red, green, and blue uints from 0-255.
	 */
	set startColor(startColor)
	{
		if (!Array.isArray(startColor) || startColor.length != 3)
			throw new TypeError("startColor must be an Array, its length must be three.");

		for (let i = 0, l = startColor.length; i < l; i++)
		{
			if ({}.toString.call(startColor[i]) !== "[object Number]")
				throw new TypeError("startColor must be an Array of Numbers.");
		}

		this._out.startColor = startColor;
	}

	/**
	 * startScale
	 * @getter
	 * This function is a getter for the member startScale.
	 * @return {Number} The starting scale of all particles.
	 */
	get startScale()
	{
		return this._out.startScale;
	}

	/**
	 * startScale
	 * @setter
	 * This function is a setter for the member startScale.
	 * @param {Number}  startScale  The starting scale of all particles.
	 */
	set startScale(startScale)
	{
		if ({}.toString.call(startScale) !== "[object Number]")
			throw new TypeError("startScale must be a number.");

		this._out.startScale = startScale;
	}

	/**
	 * startSpeed
	 * @getter
	 * This function is a getter for the member startSpeed.
	 * @return {Number} The starting speed of all particles.
	 */
	get startSpeed()
	{
		return this._out.startSpeed;
	}

	/**
	 * startSpeed
	 * @setter
	 * This function is a setter for the member startSpeed.
	 * @param {Number}  startSpeed  The starting speed of all particles.
	 */
	set startSpeed(startSpeed)
	{
		if ({}.toString.call(startSpeed) !== "[object Number]")
			throw new TypeError("startSpeed must be a number.");

		this._out.startSpeed = startSpeed;
	}

	/**
	 * cleanup
	 * This function is used in order to kill all active particles immediately.
	 */
	cleanup()
	{
		this._out.cleanup();
	}
	
	/**
	 * destroy
	 * This function is used in order to destroy the emitter and all of its particles.
	 */
	destroy()
	{
		this._out.destroy();
	}

	/**
	 * playOnceAndDestroy
	 * This function is used in order to start emitting particles, set autoUpdate to true, and set up the Emitter to destroy itself when particle emission is complete.
	 */
	playOnceAndDestroy()
	{
		this._out.playOnceAndDestroy();
	}
	
	/**
	 * resetPositionTracking
	 * This function is used in order to prevent emitter position interpolation in the next update. 
	 * This should be used if you made a major position change of your emitter's owner that was not normal movement.
	 */
	resetPositionTracking()
	{
		this._out.resetPositionTracking();
	}
	
	/**
	 * rotate
	 * This function is used in order to set the rotation of the emitter to a new value.
	 * @param {Number}  rotation  The new rotation, in degrees.
	 */
	rotate(rotation)
	{
		if ({}.toString.call(rotation) !== "[object Number]")
			throw new TypeError("rotation must be a number.");

		this._out.rotate(rotation);
	}

	/**
	 * update
	 * This function is used in order to update all particles spawned by this emitter and emit new ones.
	 * @param {Number}  delta  Time elapsed since the previous frame, in second.
	 */
	update(delta)
	{
		if ({}.toString.call(delta) !== "[object Number]")
			throw new TypeError("delta must be a number.");

		this._out.update(delta);
	}

	/**
	 * updateOwnerPos
	 * This function is used in order to change the position of the emitter's owner. 
	 * You should call this if you are adding particles to the world display object that your emitter's owner is moving around in.
	 * @param {Point}  position  The new position.
	 */
	updateOwnerPos(position)
	{
		if (!(position instanceof Point))
			throw new TypeError("position must be a Point.");

		this._out.updateOwnerPos(position.x, position.y);
	}

	/**
	 * updateSpawnPos
	 * This function is used in order to change the spawn position of the emitter.
	 * @param {Point}  position  The new position.
	 */
	updateSpawnPos(position)
	{
		if (!(position instanceof Point))
			throw new TypeError("position must be a Point.");

		this._out.updateSpawnPos(position.x, position.y);
	}

};

module.exports = {
	Particle: Particle,
	Emitter: Emitter,
};