import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
        size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function QuiltedImageList({setSelectedImg}) {
    return (
        <ImageList
        // sx={{ width: 300, height: '63%', marginLeft: 0.5 }}
        sx={{   width: { xl: '300px', lg: '30%', md: '93%', sm: '92%', xs: '100%'},
                height: { xl: '63%', lg: '43%', md: '29%', sm: '50%', xs: '37%'}, 
                marginLeft: { xl:'0.5rem', lg: '0.5rem', md: '0'},
                marginTop: { xl:'0', lg: '0', md: '-12rem', sm: '-5rem', xs: '-2rem'},
            }}
        variant="quilted"
        cols={4}
        rowHeight={121}
        >
        {itemData.map((item) => (
            <ImageListItem
            onClick={()=>setSelectedImg(item.img)}
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
            >
            <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
            />
            </ImageListItem>
        ))}
        </ImageList>
    );
}

const itemData = [
    {
        img: "https://lh3.googleusercontent.com/ACM8yxxvA1JFiXHvYcG4WDpFq7USpCQW_z7MoCza3X6WQ9Z85Ek9xZnFbimfuTrAXyP4_2YI5rTdzOq6EJYZZ9mrnsHRsYjJX1U1s5cPEKnJZzg0VhNmxE2CHC0B2aY85CB1QJ9PJhE_AwNFB4D53MN6fENvcqLLfEpRA00We6VHA5CVmC4YUXWeW2qcL-Lbxd3owak6WWDYpTGmCzsJIMQE5zMwIp3zsydfJorq-K5ROLW0Vml8-eiImbAKD3PpRCJFYX3_RgdC2HBvG_JU-Uk0t1kreKmlVOGHAl1tRpfpK48kLgsVvM2nARRuHS3B61QKsghiwyCiGVfy93FPxGR0tnPmfB6N_HJ31BQo0plpgyJ6Epe5Y53AJNN5x_D9hceeHzA9EIfJkQw-HiPYpftc3N24ICu_TucDMcwC5KhSMImrthxqVb1GQrr_IHWOiphCQgJgwoa8D9mcpEENfThfhMzbh2oBF9GvTA7I6skf13tGL6LhhYZXhvqQOKluEteqC4yA7K_xgmMTPJTvoNIflbJ2dSa1Zl2Oub63q9v4_D3N4OzqExIwz0sCAkzbuR_kxA7lTg9c9YNmSYjjEZkrnV1dm3LkOh6SOUrAswMXlWdM8GliwcjitnD6HdIcbrULVAYSR4Rh28JCel-aYCFk916XmZ2AI7LHX98_qQlkI1jWvgNXqQV8nXM7b8Qg9BCfpHNQ_IznuBIJ5y8kaOT3vwrNY-dL41ZP4J3GaBr0THOJmGczpqQHb1KSG2mxAjMLzT0Ro7dcnI5lrNqRl7OKEJnQ05wgzInMcXGjcrddsCfN36CQ4K58Tv87S85p0kZuQcwkTpgoszatO1txCHh_CDKLpWCLVxe5E3Ey3LvK5cUVX5bdMe2HSp0kVS9IX9NAYJYRcpV5kaeTZW1uNIFoMdWrg7TUpMwEIbZ8Llz6=w1454-h969-no?authuser=0",
        title: "Sonic 2018lt view from the hood",
        author: "Iuliia Polinovska",
        rows: 2,
        cols: 2,
    },
    {
        img: "https://lh3.googleusercontent.com/Wzj0ZC1v39oM46uBt3lfAuhUwzFcqgBFNKi6X7BkGSbZhFQ1P6NF_5Tta8KFbkjjkuu4Pd7PFmePKz8uWHfkB5hzimTCg-FCKUYOs--OmY18Z9v9UyvnRucQuyaqgT4WoqHtoAK9URDYGCQxiszvB4I0ECyFvxxcKWlMNYEoVzS-anuY8m_kB2tKm5afCJvV9L75ikcKpTam8_fKyKf8INk2Csaxw6vozkP7lUHDYAIRV2E5illidYAJq-mEkrnZOlmbRBRdwT2-swvWGMlKAGN7k-SmXwhkZxJafUqrSYCXty4hgGRWxm690Lpmkayl9MmllaT2cQ9jFZZKJE2O6i4g5_S2HabS2-dHMfNt9sg73P-ROPvSd9oWkGLmA_98_nNVeD4tSM1kv4LEeDz-5dBicZEPeCiQHrpH90OcpmmSmvID9COi6tJlA6iKRofE-DYhwTmxbBquC84iYTNNj3xHpT4KkAkSSLA9QhHWfZ8ml14UFSbUIrRJu7deVzQegKzzROfLX9SLz1tgXbR8eJkdec-t2d_WK6z6FJBW8vBLgx3NVXmHZWIBoknlk8rORJcjYco8jXgLlsvhfKG2OSpOEXm1ulFcVlb6fe_rIUquuE2Jb9rN-CuX7hjevVW-3qJKQrgcUvdr5qkKntk59UbSzMueLRxLfyuRFD6eMsddqQjAJIdZ8Ja7d-duaTjcP0q2_rnFhyjblOkYyejMmstHgB1LiLgDBh3rreMQBbykjoQB-tTqtyhEmu-il9nm_y5YFuuXawQ0CxeEtf6X9oQbR0_GqT7In2vx3afZc4yMkxm8zo9Ip7bygiEFXYg2mp7uar57vngwfgOl-_sxIyRt_XsWr-8eTZzodZX6aSA1uyLAf7DwILaYM5TgTD-dlsBNxyMOHL-8Hq_taCrpmaaDyE2UnmTZedqUz4wQE9Fv=w1513-h969-no?authuser=0",
        title: "Sonic 2018lt view from the back",
        author: "Iuliia Polinovska",
    },
    {
        img: "https://lh3.googleusercontent.com/qd0c2d6N5YWQG-wk9x-UHEkk-c2mRIqsk8SYoGXXblVjJFUEWS538p1WjG0BIeHPtFF42QCVV_4ygsQlaoQHrwKaBEpSXpnOM6y3L66UvmWmZjZxAN5t6IlT1kfzU4Ox0UogbAt41Gwssb1J8c6vr9_to9KGXXxYNolBiCgQP9oTG-LrzSf2PnDeNn4xO-6ruvW60-i3ZNztzMFGzz7dDP7-iTFuhu-rY7HktCO9IZsdcjPlUumum4XML-uxGFJm3PIRs-JK2vt4Eq0hMKuzq3ZoFh7pSYQf3xjtvvBU1ghH5odtfKplfLHd6ZQ7ieoNrFoevKmZYqnjLP3OFCukkXN0KdGAAmIMOV8hCYr_yPm3v7z8Osxl2P_ELJgFkpKtYLImSjcyHJY8NTSkhiLAdYVtUoPvWJ09zsBnY_KSF7iQ-w8pm0SB-Qjf53IxJafr_z58oM6aeKenbZ4O2qPP5V0CeCFsbdXsiMeCn1z3IRbzY8XzG65piGGyJrEh9try464MXA2gunNenYe-HZAUYjhBlliN8Iwt8cxpQVkcp64EjUm2Opj805ZBUjdWaBEYjdH-fkP3JCBmztZN3LNe-49Sj2LhS3l6teAaEnozz5NO2Adr4noxVmYToh5KasjP4I2s885YpuAnqepT44lRD6oPRkJ3XTJS2MWYwjNkEM8kT9YT3923Uduf4CqyRYxDfAKY3kqDkRUkMXI_dt66kt6evPMygalYRRj2PoBMjE6SHNnbq4dYa40qAR1WViQf-lOOAHjoLkkS--o-x_mTbb35TNw6qP2ZdSApbBri7aRx_YEqfjjOPmTF-pulxsKmk91E5BQ2jmeQaR5KLQ29TGdD-m5SgQb9-hUfuge2ltNPcfAHb9N7d-6fYRZdxOEZSByWRf4RfuvnTIOiyygJzPQdO65_swBCTu9n6rjjrXj0=w1527-h969-no?authuser=0",
        title: "Sonic 2018lt view from inside steering wheel",
        author: "Iuliia Polinovska",
    },
    {
        img: "https://lh3.googleusercontent.com/pTI5EGFz5STKWQg71u8cu3wUYgN-v8Ldt_d_S-IsdCaQYrvL1lvIUU6q6xBg9-T1-hul5PSNI4F_WdFi9_rks9vjoDTWFKn-xLULLskEBVV0FmlqEDMPuBh6jCqbMaTtWtqu_ytguWsfCsB3DAv1Ad7y3yMapFX4ujLmz6ug5ShQH3ZjWsFmURVcQ4LNJZj8sMSZq-kSf1ZoERXAuKQijNJdrbpd3KSd5kj5Ys_y53mxKqlXe1vsgZdb3GgnuhIBspu_9pQ-uIwJDcBSYtEuWbDTFu0LwjrjkWQnN0gWygzm5bpxhcS3ibVZF7VMVABjz6uhwTvzx-1wrSA488pT8dqVrFekt-SFXoLLgUpxyemFHBXS1SuhLLsZuWkgHnDw0x6cJ2dOzBKJrKDfroZTW_0qtNbHukf8etN1YYAfCYzQZDdPDXSw0KECpePUlCTuhJywA8at-JYjBDoTGrZvQPXgH_96hnEtM08xXoacymGo_aCdF_Rrs73ORGUr3c4_DV1CNu5TSUyDEIe9Sl5Rc-RYFvKdSKQ1CTL0EZx4ZgKf9-uDEI9epCuEZLQeVpfre0_iX3H-UlwD1-j3UGuqcmplxa83WRzuzCAhMyEuiplpfCnxKhliQ2D746dU09m4mLzlR3h5LbuFtRek6y0VLRSBNc-wB11_aX2pHvTpW_B_2CvJ5p0KiT2GXZC3iZlcWy3AKpWfNUeqtj8hLeWBIvk1y_p_2xQS_XMPJYTIPhacLND3-3gV0bU69BKQhsvHXKDYH4L7Qck5SujP1uWQwIZEhT34ZAsypNADfOW_ekCtDFI1NnejZlYxoE2NFHHwEVK4YCcLYIUyyp6h0ulhNa3huhrRkLCDgFS3EoCz7Hk5PN0H0MVkin1KHcM0GmDY2IYdTehLTxp6ASRr2NuQxHdWwCVw9EQSX8tT_epi91nh=w1454-h969-no?authuser=0",
        title: "Sonic 2018lt view back seets",
        author: "Iuliia Polinovska",
        cols: 2,
    },
    {
        img: "https://lh3.googleusercontent.com/UTyaqriwrFxFhawnTnubxrAyteODlrL8PXm3oeYa6DJ7q5H9pbPopfr5C6ZZY38fCPbqr8NrKPRYKn9CkPNWAHDmgN8mvpx_pKEa3dPVEQAkcWL6whSO5COvQZH8XcorsWvHzwgL5_t4Q32bXgPSWwsT6A9sW-pnlRV9byM8MBNmjhtrDvvyvE82gQuVt-ciKM7WuuSVyUnGVVYxn_TYqDXgjq0Kcn_dBzLLd9Dy1o1gVFitTmieYb1ReiO26eOs3OiPZRDk-qxk5Ar30JBU3SmFqDcDCyjqNS88NAq4PB6Do3_YrC2NAkTg3S5C7NYqxEJul_0xtobNUbisVK52gvyhDERUYj5tWycEJglxYjXov4rR0oRq3bYE10ZlrWTwGYlVO8rNPmMBpcNWTRfg2bld1IZR1XkPHFMCHeBs1dnOva3YSZndlNmqlTkp8KXjwPbdnWREngkxNRf-jPQWiY_2USaOej0UjIE6iHw4Y6sun8rRTNrWsrEbYQdudn_myLWAq7IiPZ0VT_QtYYItrShAc0vA0Io-1e1T1M4yPWP2mM2AMvb69KTVmsig5Egl0i0ymeWgrKX8rhTMMEjwcq5RamwDFjSCFP0TGa5huseMGxKD_NxREESgbublaKnGFSb1XXh1ya7GIeYBoCAEU_pzKm9zWI7kYlr9Y3PmXUlBPPM1qBTgKOr0bcw56bIS3HvenqmdiTHJw2VJRn08xbArJ7v7l6wfgP6QXE0_XG_1pw0oiwWdsjzlxalL3TQgqzv7a2qWlFatuigj4aD8KjGvY_ZylVfxnhODJrgEWnDaGPQ-38CJ9MCaQzV1clVs3_KLFnEr4hsuK5RobhyEpONma1-eGdBhpMOVRaDED4vM3FVlE-YhrZS2wjhP42-EQwKE0W-VuTIeoapQxm1W0oQ5wDtiv-zjipDS9LXoJv4E=w1454-h969-no?authuser=0",
        title: "Sonic 2018lt view ecotec engine view",
        author: "Iuliia Polinovska",
        cols: 2,
    },
    {
        img: 'https://lh3.googleusercontent.com/EI74jJxZwSljvmggY-3a7YuysXHNNucYt2ZBj6197tGqd1vGk-4hmlqn5hMKhzwLSVIOskdIcjHL7dzgh1oJmzVhBl-zz5wLwE7VRnIoApEsN6upUJoNoSQJCIqpi0_3745YfALtYsvXz-C-uUuwjXBhAMgae8GfaTEZlKuAFog6eUPzV_eR61_7vyqU3yeKZWRvH5B5Pct_cJJsTP4egpwt198g655LKycLX6mJ51BHD6yxupPJs4g7-tPN-rAPjkjtds8kc648pcHYyDqZcb7mqSDAnNzyZ6H6RuMblSGZuzWhvBeojFnB2tmwD_YcEFzB-Ni51cNMNjpoqK1WU1b7bx6ILPNJYyc8g_WVC8RHnw0zzq05WBIooV0koL_L99yi1_nVR34fkTrCuf_jiRdksLoi2gDM5SEMpJi7DzihJ5d_E8XaJjYJX-vEqSb6CUxLSIypo3Y5NpczEOXy27tAbDmRL4B0qGjxUcLvh0vSB-CRj3Ae1l6DhY_WEmjIKEmPItK6wEra31Qts9_8kYNB--qojW9Y1x_a1oVaFUK5uUPkyXbaELmNk1uE34SVw-7SElryJHHy9kO_0grIUVS5KRdwEyMtdEknWEciXOmx8kiGCIiWtdVQsiG6BqG1LZGFFnq_Z61Rjg-LMolzof_wiRI3qtkiIcERxsJNJTJoRzc03b4-ySB4vvdVoghhM2Ar3FDH2zAG0UkVoXVUebGMWRh5TrfCd-J4SmmPaszUmekzKcxtlN3e6tnCm80e5yf516m1F8Es1FcJN_oJtDncLLZIfn98p759v09DhKT6VPYogquVoRYn1t44R5nkU1xfGxRmlba7m0kP1wX8M0yB3GpwMIgGuPQTaxnf0cFqvAb-mIDiVDov3uH08WGk3DASC2NWFEsYQo59uE98VpOSPEZaO3YuOHtY199CQ-fh=w1539-h969-no?authuser=0',
        title: "Sonic 2018lt view open hood and doors",
        author: "Iuliia Polinovska",
        rows: 2,
        cols: 2,
    },
    {
        img: "https://lh3.googleusercontent.com/f52Psu3HcacFxpNTB5oW-sTqBu7EkiTRl83qZ0bFw6nw0LDP8o03YIOQ9yM4CCt2bA8VKlUREaOoNVpFUJ-07jBfg5e_7OK760ebxt06R28N3A0H7XJtPcFQ-etisFL-NhKEhjM-lV3dCqz1-0UNYx0WQJjMY9eTmbl_GWzTsJl-iMSAyyIHhj8TAP4dXDBEWrI2t9u0vPG8fF5J2Q8Y02Oeou8hD48XDADPf7WdSBXnatmPhEzW3uG7tS5GnS4Y3XCurqhvgM5xw9JyhNCtiTwnJyrC86A2lKxamZzvIAgLnoNnt1ZsVP8DHZnx3ONITzUWajoBjGHTUoWGUC77g9KmbaD8JxaJZHOEaE9w0S5SjUEuNrb9GngodDvFuXnOLHIFOMZgNuRzMIGP3BNDaOHAByO9honW3Sib6I14drQZ5-cAR2EF4SpGRLqSdWKFPlcfFqyWyl47nrp6ZKWw71P_1YtvR6T5RFuUv2XAKO9LgeNATEAqTxy6GEz95JcLzBYw9M59O9G8ywK1UMCWs5FR6txwJp4iq7ypKIUGpwnwx_VSxnxWKkEnV8AUXIvWSV13s1ZEGbdEuMzPkFTcKlwvRt8e3horM9R8O1508k_k3CoFxdO0jrhuJ5I6ZQE_aHeqF0r39Z-FnbVBKp-2BI98qx0pNDf00rIEyNPtVcG-RIZ0XHToLvFzsGjPSxDpPK9sL3BTO_KclSUgvS9EdkKDFa297JHCQOsNXdaMGvxQOeGj-zXyuEvrAqU-OzwVutX-qrC-d0nklkNd-aqL9nNeLPBlyYN9ZP5D86HUFJ39m6yvzZkTIAUoVf95Tt07bhPgD9gt6OgSdJ9xTuY64v19e4sWX7JB9aPUwJDZ0aBEjSGZETdi0vF6Jc5i0ac2gB5HA6o9uNFVWi4-xGRO8mE-zR_znHGgaDnOwC6RJHDd=w1630-h969-no?authuser=0",
        title: "Sonic 2018lt view from a side with passenger",
        author: "Iuliia Polinovska",
    },
    {
        img: "https://lh3.googleusercontent.com/WQZysjtY90UnLllf6sDcIRTqDScfk1dkS3hTl4KHS-UAKETj2yM3YbOIQxqwMfLYaLXK3L5rLHKky1uBN153l2W1J7xXW1cWJMVSYP7zlcnrIYuAEtJmxL77RiMAfmieOZM-ZyrFDZwrF7ARa2naTNboq34EslCvtLKrNfQ3r35hQpXQBt1YIJFuLobp41XQzf3fvaB2zDERAhlxZYQcEHEynio52VxKaFWnr_Myvo8BZqdp4qm1QRUrXDsCee5d4JEGl0waCPIZIZKc2DmInclJnv-akIi7bGND0hYE95Dezox2iOdre38Vje6TtrAMp3Y9k_U4fT1NADb51Q_OnHTFz-0dqYJkot6j4qwWoXIFZDFZ2aBF3Sl6LuU2LLNkmvDdCfwjAoeOTmXqP46RqqykyZ3DdEYUWyPgdFgz8g2lKZezfzPwwLsBGmAGCS5YhSCU8Uc12yjplU6K3HL33I6XTEH22YLOYpLEAdv4GMkVWnY-7jJZ3R-DdLzol143UI9JrLJJMYLjk8TlxWWrT3_EJJNywtcH00RlxL2VuKq76FW7HD9Bdzac4FByj6T35WlKJZ0RKpP2-_rOXsT8ja90YxHJlM_60SYoWnqqYF_1tyY2v48rpdUGQ7bTGSQjkTg3SkEN9xjNwhE0f1CefwmUlIetovZRmj9YWwa2af6XeGCmOq34uiecnqrwMeupTMbOuKjrjIROJ-NXAfdHLK2gBiy9NatBZB_NbDSqRpeBV2iPNMxHfcOKZC4X7mS8WdI1US3hfCwtD34jlw13cuzvVZVV1hYLftMoNoiiNKIufTAMyotdJ_vWySAiRaqDRZvsG8FqWgoxN4eTewgumv-Wp434hl4gFF80D9DDQxHJxh4v0kQTT7KgNx6wBeBaU0vSqKdLIwkEah89t-7JJLUWI4j5-thTPq7GSgX21M75=w1434-h969-no?authuser=0",
        title: "Sonic 2018lt view engine in different point of view",
        author: "Iuliia Polinovska",
    },
    {
        img: "https://lh3.googleusercontent.com/Ha0lIBl3sznT6qFiXZ3NFhDWR0UaoJd5BWKT8VDlVBs4yJusGVQPNp_Ezax_gjHkw8PXlSuWtIYv5DWhstCO0E6NxF2QI6vxGjERUQ7gQHqVx75bLM5fUAu9i8tr97e4qH0hPRazdSUGq-9EsMb8pumlzZuy3MPSoOmXNk1p2iOwHxuAgFmldg8EZF_aHVzbWfbq2b6O9B8rf97ONsulv1xyV7zlUrSVp0Axk5IlXmiBFjrN-zwv5TXc6FQ5Fnw-0gh3i-_j-4ElMyMSNDrp-WP6MUopSmJ5pQy7qVlnDtmkJ6-q56SBWkIF5XWz9mabxU3vBFPZqTRwJmqW59PfTFX1Yd68_1MmZSaSWjKfgWBxuCn_7iHBXtXAQiFwqdmvTWVAilcdTTwI4pTKdWigX08Ql9qXEbOEGvqLcPEq4cpb-H4j_Y595tPMd4FwpEj6-2EV7_cZeS3jFCbWs2zPEr2hoDs5vt8WeCFRrX4MVoYba4oyAWs8kM_7Se_VegpSc2_o5Ndb0XcvPBrNQJFENcvxMmrjSh8eroj8rh2pSMa4GYJHakbNoVekLKMj9IwwhsLqbZ8q6PDXiFBvs01degkgKVeHsz1SDL-mwDBHkCDKwLR0k595_s4HTX-nuJIOeXIAEHP72aBqhbztEPSkRkCWhDZXc96XZ3EaXirMivJF2wHs8LfmW6HHuBLuA5SrEs9u0GZ9F7KBrikDENVvvni4X1QaND9lIa8apsHvQ_UaRNxXbEEN4oj_4tF_Eofg7YN-_0fN8GMAjMTEM0mU8DHh1wyWpK_ClqJRQ8t3VWKUd9pyoeiBBPyAcAYIqrMijbT1rXjowu4ViP5QVTQ5sTTF8i-7BQutknheuCj3dQ3qguF6gCLR0a_ql1kb1r_XzqtlDf4N8eCZOF8w5W3eYC1fUocwaS5K7dWpVees6m60=w1330-h969-no?authuser=0",
        title: "Sonic 2018lt view and downtown Toronto",
        author: "Iuliia Polinovska",
        rows: 1,
        cols: 4,
    },
];