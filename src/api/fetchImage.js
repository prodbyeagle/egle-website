export const extractImageId = (iconUrl) => {
   return iconUrl.replace('rbxassetid://', '');
};

export const buildImageUrl = (imageId) => {
   return `https://biggamesapi.io/image/${imageId}`;
};