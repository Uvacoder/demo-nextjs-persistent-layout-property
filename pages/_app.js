import React from 'react'
import App from 'next/app'
import SiteLayout from '../components/SiteLayout'
import AccountSettingsLayout from '../components/AccountSettingsLayout'
import '../css/tailwind.css'

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props
    const Layout = Component.layout || SiteLayout

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default MyApp
