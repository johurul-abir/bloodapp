import mongoose from "mongoose";

// create user schema
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
    },
    photo: {
      type: String,
      default: null,
      trim: true,
    },
    location: {
      type: String,
      default: null,
      trim: true,
    },
    bloodGroup: {
      type: String,
      default: null,
      trim: true,
    },
    gender: {
      type: Boolean,
      enum: ["Male", "Female"],
      default: false,
    },
    dob: {
      type: String,
      default: null,
      trim: true,
    },
    profession: {
      type: String,
      default: null,
      trim: true,
    },
    bio: {
      type: String,
      default: null,
      trim: true,
    },
    lastDonation: {
      type: String,
      default: null,
      trim: true,
    },
    gallery: {
      type: [String],
    },
    role: {
      type: "String",
      emum: ["patient", "donor", "admin"],
      default: "patient",
    },
    accessToken: {
      type: String,
      default: null,
      trim: true,
    },
    isActivate: {
      type: Boolean,
      default: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// export schema
export default mongoose.model("User", userSchema);
