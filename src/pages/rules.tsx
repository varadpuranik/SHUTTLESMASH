import fs from 'fs';
import path from 'path';
import { GetStaticProps } from 'next';
import { remark } from 'remark';
import html from 'remark-html';

interface Props {
  content: string;
}

export default function Rules({ content }: Props) {
  return (
    <article className="prose lg:prose-xl mx-auto p-6">
      <h1>Badminton Rules</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'content', 'rules.md');
  const markdown = fs.readFileSync(filePath, 'utf-8');
  const processed = await remark().use(html).process(markdown);
  return {
    props: {
      content: processed.toString(),
    },
  };
};
