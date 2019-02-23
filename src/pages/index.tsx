import Link from 'next/link';

const IndexPage = () => (
    <>
        <h1>next.jsサンプル</h1>
        <p>
            <Link href="/sample" as="/sample">
                <a>sampleへのリンク</a>
            </Link>
        </p>
    </>
);

export default IndexPage;
