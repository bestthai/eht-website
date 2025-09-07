const gearImage = import.meta.glob('../assets/gear/*.{png,jpg}', { eager: true, query: '?url', import: 'default' });
const hunterImage = import.meta.glob('../assets/hunter/*.{png,jpg}', { eager: true, query: '?url', import: 'default' });

function getImageUrl(name) {
    return gearImage[`../assets/gear/${name}`] ||
           hunterImage[`../assets/hunter/${name}`] ||
           '';
}

export default getImageUrl;