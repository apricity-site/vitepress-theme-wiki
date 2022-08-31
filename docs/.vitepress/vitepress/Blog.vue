<script lang="ts" setup>
import {provide, toRefs} from "vue";

import meta from '../../meta/blog.json'
import {blogInjectionKey} from "./context";

provide(blogInjectionKey, {
  meta: toRefs(meta)
})
</script>
<template>
  <div>
    <main class="body--container container-fluid">
      <div class="main-body--wrapper">
        <div class="desktop-only">
        </div>
        <div id="banner">
        </div>
        <div class="row-fluid blog--wrapper">
          <div class="span8 mobile-left-pane">
            <div class="blog-preview--wrapper">
              <article class="blog--container blog-preview">
                <h2 class="blog--title">
                  <a href="/blog/2022/08/25/a-bootiful-podcast-fellow-java-champion-and-timescaledb-developer-advocate-christoph-engelbert" name="&amp;lpos=apps_scodevmw : 73" onclick="s_objectID='apps_scodevmw : A Bootiful Podcast: Fellow Java Champion and TimescaleDB developer advocate Christoph Engelbert : 73'">A Bootiful Podcast: Fellow Java Champion and TimescaleDB developer advocate Christoph Engelbert </a>
                </h2>
                <header class="meta-data--container">
                  <div class="meta-data--item desktop-only">
                    <div class="meta-data--icon icon blog-icon engineering"></div>
                    <a class="category" href="/blog/category/engineering">Engineering</a>
                  </div>
                  <div class="meta-data--item">
                    <img class="meta-data--icon" src="https://avatars.githubusercontent.com/u/54473?v=4?s=20&amp;d=mm">
                    <a class="author" href="/team/joshlong">Josh Long</a>
                  </div>
                  <div class="meta-data--item">
                    <div class="meta-data--icon icon blog-icon calendar"></div>
                    <time class="date" pubdate="" datetime="2022-08-25 00:00:00.0">八月 25, 2022</time>
                  </div>
                  <div class="meta-data--item">
                    <div class="meta-data--icon icon blog-icon comments"></div>
                    <a class="comments" href="/blog/2022/08/25/a-bootiful-podcast-fellow-java-champion-and-timescaledb-developer-advocate-christoph-engelbert#disqus_thread" data-disqus-identifier="4893">1 Comment</a>
                  </div>
                </header>
                <section class="blog--post desktop-only">
                  <div><p>Hi, Spring fans! In this installment, Josh Long (@starbuxman) talks to fellow Java Champion and TimescaleDB developer advocate Christoph Engelbert (@noctarius2k) about PostgreSQL, Java, time series databases, observability, and so much more. </p>
                    <iframe title="Fellow Java Champion and TimescaleDB developer advocate Christoph Engelbert " allowtransparency="true" height="150" width="100%" style="border: none; min-width: min(100%, 430px);" scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=i9efu-12aa2ed-pb&amp;from=pb6admin&amp;share=1&amp;download=1&amp;rtl=0&amp;fonts=Arial&amp;skin=1&amp;font-color=&amp;logo_link=episode_page&amp;btn-skin=7"></iframe>
                  </div>
                </section>
                <a class="blog-preview--readmore desktop-only" href="/blog/2022/08/25/a-bootiful-podcast-fellow-java-champion-and-timescaledb-developer-advocate-christoph-engelbert" name="&amp;lpos=apps_scodevmw : 77" onclick="s_objectID='apps_scodevmw : READ MORE : 77'">
                  Read more
                </a>
              </article>
              <article class="blog--container blog-preview">
                <h2 class="blog--title">
                  <a href="/blog/2022/08/24/spring-batch-5-0-0-m5-is-available-now" name="&amp;lpos=apps_scodevmw : 78" onclick="s_objectID='apps_scodevmw : Spring Batch 5.0.0-M5 is available now! : 78'">Spring Batch 5.0.0-M5 is available now!</a>
                </h2>
                <header class="meta-data--container">
                  <div class="meta-data--item desktop-only">
                    <div class="meta-data--icon icon blog-icon releases"></div>
                    <a class="category" href="/blog/category/releases">Releases</a>
                  </div>
                  <div class="meta-data--item">
                    <img class="meta-data--icon" src="https://avatars.githubusercontent.com/u/1210553?v=4?s=20&amp;d=mm">
                    <a class="author" href="/team/fmbenhassine">Mahmoud Ben Hassine</a>
                  </div>
                  <div class="meta-data--item">
                    <div class="meta-data--icon icon blog-icon calendar"></div>
                    <time class="date" pubdate="" datetime="2022-08-24 10:01:00.0">八月 24, 2022</time>
                  </div>
                  <div class="meta-data--item">
                    <div class="meta-data--icon icon blog-icon comments"></div>
                    <a class="comments" href="/blog/2022/08/24/spring-batch-5-0-0-m5-is-available-now#disqus_thread" data-disqus-identifier="4892">2 Comments</a>
                  </div>
                </header>
                <section class="blog--post desktop-only">
                  <div><p>I am pleased to announce that Spring Batch <code>5.0.0-M5</code> is now available from our <a href="https://repo.spring.io/milestone">milestone repository</a>. The main theme of this milestone is improving testing support in Spring Batch. This post walks through the major changes in this area as well as other changes introduced in this milestone release. For the complete list of changes, see the <a href="https://github.com/spring-projects/spring-batch/releases/tag/5.0.0-M5">release notes</a>.</p>
                    <h2><a href="#test-utilities-configuration-updates" class="anchor" name="test-utilities-configuration-updates"></a>Test utilities configuration updates</h2>
                    <p>Up to version 4.3, the <code>JobLauncherTestUtils</code> used to autowire the job under test with the goal of facilitating the test setup. But what if multiple jobs are defined in the test context? And what if no <code>Job</code> beans are defined at all? So while this autowiring was convenient for most cases, it turned out to cause several issues in the aforementioned situations. In this release, and based on community feedback, we have decided to remove the autowiring of any job in <code>JobLauncherTestUtils</code>.</p>
                  </div>
                </section>
                <a class="blog-preview--readmore desktop-only" href="/blog/2022/08/24/spring-batch-5-0-0-m5-is-available-now">
                  Read more
                </a>
              </article>
              <article class="blog--container blog-preview">
                <h2 class="blog--title">
                  <a href="/blog/2022/08/23/this-week-in-spring-august-23rd-2022">This Week in Spring - August 23rd, 2022</a>
                </h2>
                <header class="meta-data--container">
                  <div class="meta-data--item desktop-only">
                    <div class="meta-data--icon icon blog-icon engineering"></div>
                    <a class="category" href="/blog/category/engineering">Engineering</a>
                  </div>
                  <div class="meta-data--item">
                    <img class="meta-data--icon" src="https://avatars.githubusercontent.com/u/54473?v=4?s=20&amp;d=mm">
                    <a class="author" href="/team/joshlong">Josh Long</a>
                  </div>
                  <div class="meta-data--item">
                    <div class="meta-data--icon icon blog-icon calendar"></div>
                    <time class="date" pubdate="" datetime="2022-08-23 00:00:00.0">八月 23, 2022</time>
                  </div>
                  <div class="meta-data--item">
                    <div class="meta-data--icon icon blog-icon comments"></div>
                    <a class="comments" href="/blog/2022/08/23/this-week-in-spring-august-23rd-2022#disqus_thread" data-disqus-identifier="4891">0 Comments</a>
                  </div>
                </header>
                <section class="blog--post desktop-only">
                  <div><p>Hi, Spring fans! Welcome to another installment of <em>This Week in Spring</em>! We’ve got a <em>ton</em> to cover, so let’s dive right into it!</p>
                    <ul>
                      <li><a href="https://spring.io/blog/2022/08/18/a-bootiful-podcast-flowable-founder-joram-barrez-on-a-bootiful-podcast-on-workflow-business-process-management-and-more">A Bootiful Podcast: Flowable founder Joram Barrez on a Bootiful Podcast on workflow, business process management, and more</a></li>
                      <li><a href="https://feeds.feedblitz.com/~/707579474/0/baeldung~Building-IoT-Applications-Using-Fauna-and-Spring">Building IoT Applications Using Fauna and Spring</a></li>
                      <li><a href="https://dev.to/mkheck/cosmos-db-for-spring-developers-part-i-using-cosmos-db-as-a-sql-database-28me">Cosmos DB for Spring Developers, Part I: Using Cosmos DB as a SQL Database</a></li>
                      <li><a href="https://paketo.io/docs/howto/web-servers/#build-and-serve-a-frontend-framework-app" name="&amp;lpos=apps_scodevmw : 93" onclick="s_objectID='apps_scodevmw : How to Build Web Servers with Paketo Buildpacks - Paketo Buildpacks : 93'">How to Build Web Servers with Paketo Buildpacks - Paketo Buildpacks</a></li>
                      <li><a href="https://spring.io/blog/2022/08/16/introducing-experimental-spring-support-for-apache-pulsar">Introducing Experimental Spring Support for Apache Pulsar</a></li>
                      <li><a href="https://feeds.feedblitz.com/~/706628598/0/baeldung~Propagating-Exceptions-With-OpenFeign-and-Spring">Propagating Exceptions With OpenFeign and Spring</a></li>
                      <li><a href="https://spring.io/blog/2022/08/17/spring-authorization-server-0-4-0-m1-available-now">Spring Authorization Server 0.4.0-M1 available now</a></li>
                      <li><a href="https://spring.io/blog/2022/08/17/spring-authorization-server-1-0-0-m1-available-now">Spring Authorization Server 1.0.0-M1 available now</a></li>
                      <li><a href="https://spring.io/blog/2022/08/17/spring-boot-2-6-11-available-now">Spring Boot 2.6.11 available now</a></li>
                      <li><a href="https://spring.io/blog/2022/08/18/spring-boot-2-7-3-available-now">Spring Boot 2.7.3 available now</a></li>
                      <li><a href="https://medium.com/@salithachathuranga94/spring-boot-actuator-6f79f93fa1b2">Spring Boot Actuator</a></li>
                      <li><a href="https://github.com/paketo-buildpacks/native-image/issues/176">Spring Boot Native image builds with 22.2.0 are failing · Issue #176 paketo-buildpacks/native-image</a> - this is in regards to an issue related to Buildpacks that just appeared last week. There’s a workaround that’s been recently deployed.</li>
                      <li><a href="https://www.youtube.com/watch?v=VVn9OG9nfH0">Spring Boot and Spring Security with JWT including Access and Refresh Tokens 🔑</a></li>
                      <li><a href="https://feeds.feedblitz.com/~/707545216/0/baeldung~Spring-JDBC-Batch-Inserts">Spring JDBC Batch Inserts</a></li>
                      <li><a href="https://spring.io/blog/2022/08/16/spring-security-5-8-0-m2-is-released">Spring Security 5.8.0-M2 is released</a></li>
                      <li><a href="https://spring.io/blog/2022/08/19/spring-shell-2-1-1-is-now-available">Spring Shell 2.1.1 is now available</a></li>
                      <li><a href="https://medium.com/javarevisited/spring-for-graphql-with-querydsl-9c4964a225d9">Spring for GraphQL with Querydsl.</a></li>
                      <li><a href="https://www.youtube.com/watch?v=1PUshxvTbAc" name="&amp;lpos=apps_scodevmw : 107" onclick="s_objectID='apps_scodevmw : Testcontainers and Spring Boot for local development and integration testing : 107'">Testcontainers and Spring Boot for local development and integration testing </a></li>
                    </ul>
                  </div>
                </section>
                <a class="blog-preview--readmore desktop-only" href="/blog/2022/08/23/this-week-in-spring-august-23rd-2022">
                  Read more
                </a>
              </article>
              <article class="blog--container blog-preview">
                <h2 class="blog--title">
                  <a href="/blog/2022/08/19/spring-shell-2-1-1-is-now-available">Spring Shell 2.1.1 is now available</a>
                </h2>
                <header class="meta-data--container">
                  <div class="meta-data--item desktop-only">
                    <div class="meta-data--icon icon blog-icon releases"></div>
                    <a class="category" href="/blog/category/releases">Releases</a>
                  </div>
                  <div class="meta-data--item">
                    <img class="meta-data--icon" src="https://avatars.githubusercontent.com/u/50398?v=4?s=20&amp;d=mm">
                    <a class="author" href="/team/jvalkeal">Janne Valkealahti</a>
                  </div>
                  <div class="meta-data--item">
                    <div class="meta-data--icon icon blog-icon calendar"></div>
                    <time class="date" pubdate="" datetime="2022-08-19 06:48:55.0">八月 19, 2022</time>
                  </div>
                  <div class="meta-data--item">
                    <div class="meta-data--icon icon blog-icon comments"></div>
                    <a class="comments" href="/blog/2022/08/19/spring-shell-2-1-1-is-now-available#disqus_thread" data-disqus-identifier="4889">0 Comments</a>
                  </div>
                </header>
                <section class="blog--post desktop-only">
                  <div><p>On behalf of the team and everyone who has contributed, I’m happy to announce that Spring Shell <code>2.1.1</code> has been released and is now available from <a href="https://repo.spring.io/release">https://repo.spring.io/release</a> and Maven Central.</p>
                    <p>Please see the <a href="https://github.com/spring-projects/spring-shell/releases/tag/v2.1.1">release notes</a> for more details.</p>
                    <p>Thanks to all those who have contributed with issue reports and pull requests.</p>
                    <h3><a href="#how-can-you-help" class="anchor" name="how-can-you-help"></a>How can you help?</h3>
                    <p><a href="https://spring.io/projects/spring-shell/">Project Page</a> | <a href="https://github.com/spring-projects/spring-shell">GitHub</a> | <a href="https://github.com/spring-projects/spring-shell/issues">Issues</a> | <a href="https://docs.spring.io/spring-shell/docs/2.1.1/site/reference/htmlsingle">Documentation</a></p>
                  </div>
                </section>
                <a class="blog-preview--readmore desktop-only" href="/blog/2022/08/19/spring-shell-2-1-1-is-now-available">
                  Read more
                </a>
              </article>
              <article class="blog--container blog-preview">
                <h2 class="blog--title">
                  <a href="/blog/2022/08/18/a-bootiful-podcast-flowable-founder-joram-barrez-on-a-bootiful-podcast-on-workflow-business-process-management-and-more">A Bootiful Podcast: Flowable founder Joram Barrez on a Bootiful Podcast on workflow, business process management, and more</a>
                </h2>
                <header class="meta-data--container">
                  <div class="meta-data--item desktop-only">
                    <div class="meta-data--icon icon blog-icon engineering"></div>
                    <a class="category" href="/blog/category/engineering">Engineering</a>
                  </div>
                  <div class="meta-data--item">
                    <img class="meta-data--icon" src="https://avatars.githubusercontent.com/u/54473?v=4?s=20&amp;d=mm">
                    <a class="author" href="/team/joshlong">Josh Long</a>
                  </div>
                  <div class="meta-data--item">
                    <div class="meta-data--icon icon blog-icon calendar"></div>
                    <time class="date" pubdate="" datetime="2022-08-18 03:00:00.0">八月 18, 2022</time>
                  </div>
                  <div class="meta-data--item">
                    <div class="meta-data--icon icon blog-icon comments"></div>
                    <a class="comments" href="/blog/2022/08/18/a-bootiful-podcast-flowable-founder-joram-barrez-on-a-bootiful-podcast-on-workflow-business-process-management-and-more#disqus_thread" data-disqus-identifier="4888">0 Comments</a>
                  </div>
                </header>
                <section class="blog--post desktop-only">
                  <div><p>Hi, Spring fans! In this installment, Josh Long (@starbuxman) talks to Flowable founder Joram Barrez (@jbarrez) about workflow, business process management (BPM), decision management, rules, and so much more</p>
                    <iframe title="Flowable founder (and my friend) Joram Barrez on a Bootiful Podcast on workflow, business process management, and more" allowtransparency="true" height="150" width="100%" style="border: none; min-width: min(100%, 430px);" scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=hs7gc-12a0620-pb&amp;from=pb6admin&amp;share=1&amp;download=1&amp;rtl=0&amp;fonts=Arial&amp;skin=1&amp;font-color=&amp;logo_link=episode_page&amp;btn-skin=7"></iframe>
                  </div>
                </section>
                <a class="blog-preview--readmore desktop-only" href="/blog/2022/08/18/a-bootiful-podcast-flowable-founder-joram-barrez-on-a-bootiful-podcast-on-workflow-business-process-management-and-more">
                  Read more
                </a>
              </article>
              <article class="blog--container blog-preview">
                <h2 class="blog--title">
                  <a href="/blog/2022/08/18/spring-boot-2-7-3-available-now">Spring Boot 2.7.3 available now</a>
                </h2>
                <header class="meta-data--container">
                  <div class="meta-data--item desktop-only">
                    <div class="meta-data--icon icon blog-icon releases"></div>
                    <a class="category" href="/blog/category/releases">Releases</a>
                  </div>
                  <div class="meta-data--item">
                    <img class="meta-data--icon" src="https://avatars.githubusercontent.com/u/490484?v=4?s=20&amp;d=mm">
                    <a class="author" href="/team/snicoll">Stéphane Nicoll</a>
                  </div>
                  <div class="meta-data--item">
                    <div class="meta-data--icon icon blog-icon calendar"></div>
                    <time class="date" pubdate="" datetime="2022-08-18 00:24:30.0">八月 18, 2022</time>
                  </div>
                  <div class="meta-data--item">
                    <div class="meta-data--icon icon blog-icon comments"></div>
                    <a class="comments" href="/blog/2022/08/18/spring-boot-2-7-3-available-now#disqus_thread" data-disqus-identifier="4887">0 Comments</a>
                  </div>
                </header>
                <section class="blog--post desktop-only">
                  <div><p>On behalf of the team and everyone who has contributed, I’m happy to announce that Spring Boot <code>2.7.3</code> has been released and is now available from Maven Central.</p>
                    <p>This release includes <a href="https://github.com/spring-projects/spring-boot/releases/tag/v2.7.3">48 bug fixes, documentation improvements, and dependency upgrades</a>. Thanks to all those who have contributed with issue reports and pull requests.</p>
                    <h3><a href="#how-can-you-help" class="anchor" name="how-can-you-help"></a>How can you help?</h3>
                    <p>If you’re interested in helping out, check out the <a href="https://github.com/spring-projects/spring-boot/labels/status%3A%20ideal-for-contribution">“ideal for contribution” tag</a> in the issue repository. If you have general questions, please ask on <a href="https://stackoverflow.com">stackoverflow.com</a> using the <a href="https://stackoverflow.com/tags/spring-boot"><code>spring-boot</code> tag</a> or chat with the community on <a href="https://gitter.im/spring-projects/spring-boot">Gitter</a>.</p>
                  </div>
                </section>
                <a class="blog-preview--readmore desktop-only" href="/blog/2022/08/18/spring-boot-2-7-3-available-now">
                  Read more
                </a>
              </article>
              <article class="blog--container blog-preview">
                <h2 class="blog--title">
                  <a href="/blog/2022/08/17/spring-boot-2-6-11-available-now">Spring Boot 2.6.11 available now</a>
                </h2>
                <header class="meta-data--container">
                  <div class="meta-data--item desktop-only">
                    <div class="meta-data--icon icon blog-icon releases"></div>
                    <a class="category" href="/blog/category/releases">Releases</a>
                  </div>
                  <div class="meta-data--item">
                    <img class="meta-data--icon" src="https://avatars.githubusercontent.com/u/490484?v=4?s=20&amp;d=mm">
                    <a class="author" href="/team/snicoll">Stéphane Nicoll</a>
                  </div>
                  <div class="meta-data--item">
                    <div class="meta-data--icon icon blog-icon calendar"></div>
                    <time class="date" pubdate="" datetime="2022-08-17 23:23:13.0">八月 17, 2022</time>
                  </div>
                  <div class="meta-data--item">
                    <div class="meta-data--icon icon blog-icon comments"></div>
                    <a class="comments" href="/blog/2022/08/17/spring-boot-2-6-11-available-now#disqus_thread" data-disqus-identifier="4886">0 Comments</a>
                  </div>
                </header>
                <section class="blog--post desktop-only">
                  <div><p>On behalf of the team and everyone who has contributed, I’m happy to announce that Spring Boot <code>2.6.11</code> has been released and is now available from Maven Central.</p>
                    <p>This release includes <a href="https://github.com/spring-projects/spring-boot/releases/tag/v2.6.11">40 bug fixes, documentation improvements, and dependency upgrades</a>. Thanks to all those who have contributed with issue reports and pull requests.</p>
                    <h3><a href="#how-can-you-help" class="anchor" name="how-can-you-help"></a>How can you help?</h3>
                    <p>If you’re interested in helping out, check out the <a href="https://github.com/spring-projects/spring-boot/labels/status%3A%20ideal-for-contribution">“ideal for contribution” tag</a> in the issue repository. If you have general questions, please ask on <a href="https://stackoverflow.com">stackoverflow.com</a> using the <a href="https://stackoverflow.com/tags/spring-boot"><code>spring-boot</code> tag</a> or chat with the community on <a href="https://gitter.im/spring-projects/spring-boot">Gitter</a>.</p>
                  </div>
                </section>
                <a class="blog-preview--readmore desktop-only" href="/blog/2022/08/17/spring-boot-2-6-11-available-now">
                  Read more
                </a>
              </article>
              <article class="blog--container blog-preview">
                <h2 class="blog--title">
                  <a href="/blog/2022/08/17/spring-authorization-server-1-0-0-m1-available-now">Spring Authorization Server 1.0.0-M1 available now</a>
                </h2>
                <header class="meta-data--container">
                  <div class="meta-data--item desktop-only">
                    <div class="meta-data--icon icon blog-icon releases"></div>
                    <a class="category" href="/blog/category/releases">Releases</a>
                  </div>
                  <div class="meta-data--item">
                    <img class="meta-data--icon" src="https://avatars.githubusercontent.com/u/10884212?v=4?s=20&amp;d=mm">
                    <a class="author" href="/team/jgrandja">Joe Grandja</a>
                  </div>
                  <div class="meta-data--item">
                    <div class="meta-data--icon icon blog-icon calendar"></div>
                    <time class="date" pubdate="" datetime="2022-08-17 02:00:00.0">八月 17, 2022</time>
                  </div>
                  <div class="meta-data--item">
                    <div class="meta-data--icon icon blog-icon comments"></div>
                    <a class="comments" href="/blog/2022/08/17/spring-authorization-server-1-0-0-m1-available-now#disqus_thread" data-disqus-identifier="4885">0 Comments</a>
                  </div>
                </header>
                <section class="blog--post desktop-only">
                  <div><div class="paragraph">
                    <p>On behalf of the team and everyone who has contributed, it is my pleasure to announce the general availability of Spring Authorization Server 1.0.0-M1.</p>
                  </div>
                    <div class="paragraph">
                      <p>You can download it from <a href="https://repo.spring.io/milestone">repo.spring.io</a> milestone repository by using the module coordinates:</p>
                    </div>
                    <div class="listingblock">
                      <div class="content">
                        <pre class="prettyprint highlight prettyprinted" style=""><code><span class="pln">implementation </span><span class="str">'org.springframework.security:spring-security-oauth2-authorization-server:1.0.0-M1'</span></code><button class="copy-button button button-small animate" data-clipboard-text="implementation 'org.springframework.security:spring-security-oauth2-authorization-server:1.0.0-M1'">Copy</button></pre>
                      </div>
                    </div>
                    <div class="paragraph">
                      <p>See the <a href="https://github.com/spring-projects/spring-authorization-server/releases/tag/1.0.0-M1">release notes</a> for complete details.</p>
                    </div>
                    <div class="paragraph">
                      <p>To get started using Spring Authorization Server, see the <a href="https://docs.spring.io/spring-authorization-server/docs/current/reference/html/getting-started.html">Getting Started</a> chapter of the reference documentation and the <a href="https://github.com/spring-projects/spring-authorization-server/tree/main/samples">samples</a> to become familiar with setup and configuration.</p>
                    </div>
                  </div>
                </section>
                <a class="blog-preview--readmore desktop-only" href="/blog/2022/08/17/spring-authorization-server-1-0-0-m1-available-now">
                  Read more
                </a>
              </article>
              <article class="blog--container blog-preview">
                <h2 class="blog--title">
                  <a href="/blog/2022/08/17/spring-authorization-server-0-4-0-m1-available-now">Spring Authorization Server 0.4.0-M1 available now</a>
                </h2>
                <header class="meta-data--container">
                  <div class="meta-data--item desktop-only">
                    <div class="meta-data--icon icon blog-icon releases"></div>
                    <a class="category" href="/blog/category/releases">Releases</a>
                  </div>
                  <div class="meta-data--item">
                    <img class="meta-data--icon" src="https://avatars.githubusercontent.com/u/10884212?v=4?s=20&amp;d=mm">
                    <a class="author" href="/team/jgrandja">Joe Grandja</a>
                  </div>
                  <div class="meta-data--item">
                    <div class="meta-data--icon icon blog-icon calendar"></div>
                    <time class="date" pubdate="" datetime="2022-08-17 02:00:00.0">八月 17, 2022</time>
                  </div>
                  <div class="meta-data--item">
                    <div class="meta-data--icon icon blog-icon comments"></div>
                    <a class="comments" href="/blog/2022/08/17/spring-authorization-server-0-4-0-m1-available-now#disqus_thread" data-disqus-identifier="4884">0 Comments</a>
                  </div>
                </header>
                <section class="blog--post desktop-only">
                  <div><div class="paragraph">
                    <p>On behalf of the team and everyone who has contributed, it is my pleasure to announce the general availability of Spring Authorization Server 0.4.0-M1.</p>
                  </div>
                    <div class="paragraph">
                      <p>You can download it from <a href="https://repo.spring.io/milestone">repo.spring.io</a> milestone repository by using the module coordinates:</p>
                    </div>
                    <div class="listingblock">
                      <div class="content">
                        <pre class="prettyprint highlight prettyprinted" style=""><code><span class="pln">implementation </span><span class="str">'org.springframework.security:spring-security-oauth2-authorization-server:0.4.0-M1'</span></code><button class="copy-button button button-small animate" data-clipboard-text="implementation 'org.springframework.security:spring-security-oauth2-authorization-server:0.4.0-M1'">Copy</button></pre>
                      </div>
                    </div>
                    <div class="paragraph">
                      <p>See the <a href="https://github.com/spring-projects/spring-authorization-server/releases/tag/0.4.0-M1">release notes</a> for complete details.</p>
                    </div>
                    <div class="paragraph">
                      <p>To get started using Spring Authorization Server, see the <a href="https://docs.spring.io/spring-authorization-server/docs/current/reference/html/getting-started.html">Getting Started</a> chapter of the reference documentation and the <a href="https://github.com/spring-projects/spring-authorization-server/tree/0.4.x/samples">samples</a> to become familiar with setup and configuration.</p>
                    </div>
                  </div>
                </section>
                <a class="blog-preview--readmore desktop-only" href="/blog/2022/08/17/spring-authorization-server-0-4-0-m1-available-now">
                  Read more
                </a>
              </article>
            </div>
            <div id="pagination_control" class="pagination blog-pagination">
              <div>
                <div class="active">1</div>
              </div>
              <div>
                <a href="/blog?page=2">2</a>
              </div>
              <div>
                <a href="/blog?page=3">3</a>
              </div>
              <div>
                <a href="/blog?page=4">4</a>
              </div>
              <div>
                <a href="/blog?page=5">5</a>
              </div>
              <div>
                <a href="/blog?page=6">6</a>
              </div>
              <div>
                <div>...</div>
              </div>
              <div>
                <a href="/blog?page=455">455</a>
              </div>
              <a href="/blog?page=2" class="next"><i class="icon-chevron-right"></i></a>
            </div>
          </div>
          <aside class="span4 mobile-right-pane">
            <div><div>
              <div>
                <div id="blog-sidebar-newsletter">
                  <p>Get the Spring newsletter</p>
                  <script src="//connect.pivotal.io/js/forms2/js/forms2.min.js"></script>
                  <form id="mktoForm_4723" novalidate="novalidate" class="mktoForm mktoHasWidth mktoLayoutLeft" style="font-family: Helvetica, Arial, sans-serif; font-size: 13px; color: rgb(51, 51, 51); width: 419px;"><style type="text/css">.mktoForm .mktoButtonWrap.mktoSimple .mktoButton {
                    color:#fff;
                    border:1px solid #75ae4c;
                    padding:0.4em 1em;
                    font-size:1em;
                    background-color:#99c47c;
                    background-image: -webkit-gradient(linear, left top, left bottom, from(#99c47c), to(#75ae4c));
                    background-image: -webkit-linear-gradient(top, #99c47c, #75ae4c);
                    background-image: -moz-linear-gradient(top, #99c47c, #75ae4c);
                    background-image: linear-gradient(to bottom, #99c47c, #75ae4c);
                  }
                  .mktoForm .mktoButtonWrap.mktoSimple .mktoButton:hover {
                    border:1px solid #447f19;
                  }
                  .mktoForm .mktoButtonWrap.mktoSimple .mktoButton:focus {
                    outline:none;
                    border:1px solid #447f19;
                  }
                  .mktoForm .mktoButtonWrap.mktoSimple .mktoButton:active{
                    background-color:#75ae4c;
                    background-image: -webkit-gradient(linear, left top, left bottom, from(#75ae4c), to(#99c47c));
                    background-image: -webkit-linear-gradient(top, #75ae4c, #99c47c);
                    background-image: -moz-linear-gradient(top, #75ae4c, #99c47c);
                    background-image: linear-gradient(to bottom, #75ae4c, #99c47c);
                  }
                  </style><div class="mktoFormRow"><div class="mktoFieldDescriptor mktoFormCol" style="margin-bottom: 10px;"><div class="mktoOffset" style="width: 10px;"></div><div class="mktoFieldWrap mktoRequiredField"><label for="Email" id="LblEmail" class="mktoLabel mktoHasWidth" style="width: 0px;"><div class="mktoAsterix">*</div></label><div class="mktoGutter mktoHasWidth" style="width: 10px;"></div><input id="Email" name="Email" placeholder="Email Address" maxlength="255" aria-labelledby="LblEmail InstructEmail" type="email" class="mktoField mktoEmailField mktoHasWidth mktoRequired" aria-required="true" style="width: 150px;"><span id="InstructEmail" tabindex="-1" class="mktoInstruction"></span><div class="mktoClear"></div></div><div class="mktoClear"></div></div><div class="mktoClear"></div></div><div class="mktoFormRow"><div class="mktoFieldDescriptor mktoFormCol" style="margin-bottom: 10px;"><div class="mktoOffset" style="width: 10px;"></div><div class="mktoFieldWrap mktoRequiredField"><label for="Email_Consent__c" id="LblEmail_Consent__c" class="mktoLabel mktoHasWidth" style="width: 0px;"><div class="mktoAsterix">*</div></label><div class="mktoGutter mktoHasWidth" style="width: 10px;"></div><div class="mktoLogicalField mktoCheckboxList mktoHasWidth mktoRequired" style="width: 280px;"><input name="Email_Consent__c" id="mktoCheckbox_121736_0" type="checkbox" value="true" aria-required="true" aria-labelledby="LblEmail_Consent__c LblmktoCheckbox_121736_0 InstructEmail_Consent__c" class="mktoField"><label for="mktoCheckbox_121736_0" id="LblmktoCheckbox_121736_0">Yes, I would like to be contacted by The Spring Team and VMware for newsletters, promotions and events</label></div><span id="InstructEmail_Consent__c" tabindex="-1" class="mktoInstruction"></span><div class="mktoClear"></div></div><div class="mktoClear"></div></div><div class="mktoClear"></div></div><div class="mktoButtonRow"><span class="mktoButtonWrap mktoSimple" style="margin-left: 120px;"><button type="submit" class="mktoButton">Subscribe</button></span></div><input type="hidden" name="formid" class="mktoField mktoFieldDescriptor" value="4723"><input type="hidden" name="munchkinId" class="mktoField mktoFieldDescriptor" value="625-IUJ-009"></form>
                  <script>
                    MktoForms2.setOptions({formXDPath : "/rs/pivotal/images/marketo-xdframe-relative.html"});
                    MktoForms2.loadForm("//connect.pivotal.io", "625-IUJ-009", 4723, function(form){
                      form.onSuccess(function(values, followUpUrl) {
                        form.getFormElem().html("<p>Thank you!</p>");
                        return false;
                      });
                    });
                  </script>
                </div>
              </div>
            </div></div>
          </aside>
        </div>
      </div>
    </main>
  </div>
</template>