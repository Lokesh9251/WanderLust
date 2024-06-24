const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//schema is basically to define diifent lists
const Review = require("./review.js");
const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,

  image: {
    // type: String,
    // //if image is not defined then we keep a default link
    // default:
    //   "https://unsplash.com/photos/a-view-of-rolling-hills-with-trees-in-the-foreground-cs-fGIqlKQs",
    // set: (v) =>
    //   v === ""
    //     ? "https://unsplash.com/photos/a-view-of-rolling-hills-with-trees-in-the-foreground-cs-fGIqlKQs"
    //     : v,

    type: String,
    default:
      "https://tse1.mm.bing.net/th?id=OIP.hOlk0w05OLs3BXnUWLoKqQHaEo&pid=Api&P=0&h=180",
    set: (v) =>
      v === ""
        ? "https://tse1.mm.bing.net/th?id=OIP.hOlk0w05OLs3BXnUWLoKqQHaEo&pid=Api&P=0&h=180"
        : v,
  },

  Price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { in: listing.reviews } });
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
