// Accepts a YouTube watch/embed URL or a file under public/
function youtubeEmbed(src: string) {
  const id = src.match(/(?:v=|embed\/|youtu\.be\/)([\w-]{11})/)?.[1];
  return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
}

export default function DemoVideo({
  src,
  poster,
  title,
}: {
  src: string;
  poster?: string;
  title: string;
}) {
  const embed = youtubeEmbed(src);

  return (
    <div className="video-frame">
      {embed ? (
        <iframe
          src={embed}
          title={title}
          loading="lazy"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <video
          src={src}
          poster={poster}
          controls
          muted
          playsInline
          preload="none"
        />
      )}
    </div>
  );
}
