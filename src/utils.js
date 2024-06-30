// utils.js
export const formatNumberWithUnits = (number) => {
   const units = ["", "k", "m", "b", "t", "q", "Q", "s", "S"];
   let unitIndex = 0;
   let reducedNumber = number;

   while (reducedNumber >= 1000 && unitIndex < units.length - 1) {
      reducedNumber /= 1000;
      unitIndex++;
   }

   return `${reducedNumber.toFixed(1)}${units[unitIndex]}`;
};

export const timeSince = (timestamp) => {
   const seconds = Math.floor((new Date() - new Date(timestamp * 1000)) / 1000);
   let interval = Math.floor(seconds / 31536000);

   if (interval > 1) {
      return `${interval} years ago`;
   }
   interval = Math.floor(seconds / 2592000);
   if (interval > 1) {
      return `${interval} months ago`;
   }
   interval = Math.floor(seconds / 86400);
   if (interval > 1) {
      return `${interval} days ago`;
   }
   interval = Math.floor(seconds / 3600);
   if (interval > 1) {
      return `${interval} hours ago`;
   }
   interval = Math.floor(seconds / 60);
   if (interval > 1) {
      return `${interval} minutes ago`;
   }
   return `${Math.floor(seconds)} seconds ago`;
};
