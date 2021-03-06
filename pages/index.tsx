import Head from 'next/head'
import { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { Page } from '../components/Page';
import Pagination from '../components/Pagination';

const Home = ({ data, getNewData }: { data: string[], getNewData: () => void }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [cardPerPage, setCardPerPage] = useState<number>(4);
  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  const numberOfPages = Math.ceil(data.length / cardPerPage);

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
    if (renderedContent.length < cardPerPage) {
      getNewData();
    }
  }, [currentPage])

  const onPageChange = (page: number, shouldGetNewData: boolean) => {
    if (shouldGetNewData) {
      getNewData();
    }
    setCurrentPage(page);
  }

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

      <Pagination
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        onPageChange={(page, shouldGetNewData) => onPageChange(page, shouldGetNewData)}
      />
      {renderedContent}
    </Page>
  )
}

export default Home
