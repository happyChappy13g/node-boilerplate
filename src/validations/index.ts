import Celebrate from "celebrate";
const { Joi } = Celebrate;

export default {
  first: Celebrate({
    body: {
      foo: Joi.string()
    }
  })
};
