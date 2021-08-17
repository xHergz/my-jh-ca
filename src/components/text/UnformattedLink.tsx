import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Link from 'next/link';

export type UnformattedLinkProps = React.PropsWithChildren<{
    href: string;
}>;

const useStyles = makeStyles({
    unformattedLink: {
        textDecoration: 'none',
        color: 'inherit',
    },
});

const UnformattedLink: React.FunctionComponent<UnformattedLinkProps> = (props: UnformattedLinkProps): JSX.Element => {
    const styles = useStyles();
    return (
        <Link href={props.href}>
            <a className={styles.unformattedLink}>{props.children}</a>
        </Link>
    );
};

export default UnformattedLink;
