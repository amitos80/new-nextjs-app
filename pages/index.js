import React, { Component } from 'react'
import * as app from '~/reducers/app';
import { connect } from 'react-redux'
import breakpoints from '~/breakpoints';
import colors from '~/colors'
import { Router } from '~/routes';
import { AppLayout, Col, Row } from '~/layouts';
import { Box, TypingEffect } from '~/atoms';
import qs from 'qs'

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

@connect(mapStateToProps, mapDispatchToProps)
export default class Index extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  onStartTyping () {

  }

  onEndTyping (k) {

  }

  render() {
    return (
      <AppLayout title="New App">
        <Row>
          <Col xs={false} sm={false} md={12} lg={12} mdOffset={1} lgOffset={1}>
            <Box height="450px" width="100%" maxWidth="1260px" margin="17% 0 0 0" >
              <div className="title">
                <TypingEffect
                  minSpeed={40}
                  maxSpeed={25}
                  text={`Hello World!`}
                  typing={this.state.hiFinished}
                  onStart={this.onStartTyping.bind(this)}
                  onEnd={() => this.onEndTyping.bind(this)('hiFinished')}
                /><br />
              </div><br />

            </Box>
          </Col>

        </Row>

        <style jsx>{`
        .intro-typing-text {
            text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
            font-size: 30px;
            font-stretch: normal;
            font-style: normal;
            line-height: 0.86;
            letter-spacing: 2.1px;
            text-align: left;
            color: #2f2f2f;
        }

      `}</style>
      </AppLayout>
    )
  }
}
