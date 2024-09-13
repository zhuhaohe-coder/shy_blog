import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href, source }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none tracking-wide text-gray-500 dark:text-gray-400">
          {description}
        </p>

        <div className="mt-2 flex justify-between">
          {href && (
            <Link
              href={href}
              className="text-base font-medium leading-6 tracking-widest text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              在线体验 &rarr;
            </Link>
          )}

          {source && (
            <Link
              href={source}
              className="text-base font-medium leading-6 tracking-widest text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              源码 &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
)

export default Card
