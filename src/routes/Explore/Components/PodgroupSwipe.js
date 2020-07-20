import React, {useLayoutEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { makeStyles} from '@material-ui/core/styles';

import PodCastCard from "./PodcastCard";

const useStyles = makeStyles((theme) => ({
    appbar: {
      height: 44,
    },
    category: {
      fontSize: 20,
      fontWeight: 500,
    },
    container:{
      marginBottom: 10,
    },
    swiper: {
      marginTop: 20,
    }
}));

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

const GET_PODGROUP = gql`
    query($category: String!) {
        getpodGroupByCategory(category: $category) {
        id
        podTitle
        podImage
        }
    }
`;

export default function PodgroupSwipe({category}) {
    const classes = useStyles();
    const [width, height] = useWindowSize();
    const { loading: loadingPod, error: errorPod, data: dataPod } = useQuery(
        GET_PODGROUP,
        {
          variables: { category },
        }
    );
    return (
        <Swiper className={classes.swiper} spaceBetween={16} slidesPerView={ (width-16)/132 } freeMode>
            {dataPod && dataPod.getpodGroupByCategory.map((item) => (
            <SwiperSlide key={item.id}>
                <PodCastCard
                id={item.id}
                image={item.podImage}
                title={item.podTitle}
                />
            </SwiperSlide>
            ))}
        </Swiper>
    );
}