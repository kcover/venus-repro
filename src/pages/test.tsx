
import Image from 'next/image';
import styles from '../app/page.module.css';
import { GetServerSideProps } from 'next';
import { Button, Heading } from '@contentstack/venus-components';

export const getServerSideProps = () => ({});

export default function Home() {
  return (
    <main className={styles.main}>
        <Heading text="This is a Venus Heading"/>
        <Button>Venus Button</Button>
    </main>
  )
}
