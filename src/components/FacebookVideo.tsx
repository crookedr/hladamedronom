const VIDEO_URL =
  "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Ffb.watch%2FDf5JjbgMb5%2F&show_text=false&width=1280";

export default function FacebookVideo() {
  return (
    <iframe
      src={VIDEO_URL}
      title="Príbeh Rastyho na Facebooku"
      width="1280"
      height="720"
      className="h-full w-full"
      style={{ border: "none", overflow: "hidden" }}
      sandbox="allow-scripts allow-same-origin allow-presentation allow-popups allow-popups-to-escape-sandbox"
      referrerPolicy="strict-origin-when-cross-origin"
      allow="fullscreen; picture-in-picture"
      allowFullScreen
    />
  );
}
