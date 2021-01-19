import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

// icons
import CodeIcon from '@material-ui/icons/Code'
import GitHubIcon from '@material-ui/icons/GitHub'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

import Link from '../src/Link'

// Granim
import * as Granim from 'granim'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#121212',
    color: '#90caf9',
    position: 'relative',
  },
  main: {
    zIndex: 10,
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    // border: 0,
    // borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    zIndex: 20,
    // height: '12vh',
    // backgroundColor:
    //   theme.palette.type === 'light'
    //     ? theme.palette.grey[200]
    //     : theme.palette.grey[800],
    color: '#FFF',
    backgroundColor: theme.palette.grey[800],
  },
}))

function Copyright() {
  return (
    <Typography variant="body1" color="initial">
      {'Copyright © '}
      <Link color="inherit" href="http://didilinkin.cn/" target="_blank">
        didilinkin.cn
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

class GranimModule extends React.Component {
  componentDidMount() {
    console.clear()
    new Granim({
      element: '#canvas-image-blending',
      direction: 'top-bottom',
      isPausedWhenNotInView: true,
      image: {
        // background-image
        source: '/assets/images/sunset-8.jpeg', // 优化后的 华润城照片
        // source: '/assets/images/sunset-99.jpeg', // 纽约

        // mode
        blendingMode: 'overlay', // 'multiply'
      },
      states: {
        'default-state': {
          gradients: [
            ['#29323c', '#485563'],
            ['#FF6B6B', '#556270'],
            ['#80d3fe', '#7ea0c4'],
            ['#f0ab51', '#eceba3'],
          ],
          transitionSpeed: 8000,
        },
      },
    })
  }
  render() {
    return (
      <canvas
        id="canvas-image-blending"
        style={{
          width: '100%',
          height: '100vh',
          position: 'absolute',
        }}
      />
    )
  }
}

export default function Index() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <GranimModule />
      {/* <Background /> */}

      <Container className={classes.main}>
        <Box my={4}>
          <Typography variant="h2" component="h1" gutterBottom>
            欢迎来到 didilinkin的主页
          </Typography>
          <Typography variant="h6" component="h4" gutterBottom>
            本页面只是用于跳转 导航
          </Typography>

          {/*
            <Link href="/about" color="secondary">
              Go to the about page
            </Link>
          */}
          <Button
            variant="contained"
            disableElevation
            color="primary"
            startIcon={<CodeIcon />}
            disableRipple={true}
            onClick={() => {
              window.open('http://gitlab.didilinkin.cn', '_blank')
            }}
          >
            Gitlab
          </Button>
          <br />
          <br />
          <Button
            variant="contained"
            disableElevation
            color="primary"
            startIcon={<GitHubIcon />}
            disableRipple={true}
            onClick={() => {
              window.open('https://github.com/didilinkin', '_blank')
            }}
          >
            Github
          </Button>
          <br />
          <br />
          <Button
            variant="contained"
            disableElevation
            color="primary"
            startIcon={<QuestionAnswerIcon />}
            disableRipple={true}
            onClick={() => {
              window.open(
                'https://www.zhihu.com/people/yan-xiao-di-41',
                '_blank'
              )
            }}
          >
            知乎
          </Button>
        </Box>
      </Container>

      <CssBaseline />

      {/* 底部 消息 */}
      <footer className={classes.footer}>
        <Container>
          <Copyright />
          <Typography variant="body2">
            <Link
              color="inherit"
              href="https://beian.miit.gov.cn"
              target="_blank"
            >
              鲁ICP备2020037005号-1
            </Link>
          </Typography>
        </Container>
      </footer>
    </div>
  )
}
