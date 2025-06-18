type BaseSchema = {
  '@context': 'https://schema.org' | string
  '@type': string
  [key: string]: unknown
}

export type JsonLdProps = {
  data: BaseSchema | BaseSchema[]
}

export const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  return (
    <>
      {Array.isArray(data)
        ? data.map((entry, i) => (
            <script
              key={i}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
            />
          ))
        : data && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
            />
          )}
    </>
  )
}
