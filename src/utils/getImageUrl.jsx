function getImageUrl(name)
{
    return new URL(`../assets/gear/${name}`, import.meta.url).href;
}

export default getImageUrl;