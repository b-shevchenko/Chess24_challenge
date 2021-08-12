import Head from 'next/head'
import { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { Page } from '../components/Page';
import Pagination from '../components/Pagination';

const Home = ({ data }: { data: string[] }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [cardPerPage, setCardPerPage] = useState<number>(3);
  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;

  const currentTodos = data.slice(indexOfFirstCard, indexOfLastCard);

  const renderedContent = currentTodos.map((paragraph, index) => {
    const title = paragraph.split('. ')[0];
    const content = paragraph.split(title)[1].substring(1).trim();
    return (
      <Card key={index} title={title} >
        {content}
      </Card >
    )
  });

  useEffect(() => {
    const pageBeforeReload = localStorage.getItem('currentPage');
    setCurrentPage(Number(pageBeforeReload));
  }, [])

  useEffect(() => {
    localStorage.setItem('currentPage', String(currentPage));
  }, [currentPage]);

  return (
    <Page
      headerContent={<h1>Hello, Chess!</h1>}
      footerContent={<h2>Play with Voypost</h2>}
    >
      <Head>
        <title>Chess24 challenge</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {renderedContent}

      <Pagination
        currentPage={currentPage}
        dataCount={data.length}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Page>
  )
}

export default Home
