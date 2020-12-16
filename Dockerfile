FROM docker.io/fedora:33

COPY --chown=root:root target/release/qango-rest /opt/qango/qango-rest
COPY --chown=root:root client/* /opt/qango/client/

WORKDIR /opt/qango
ENTRYPOINT [ "/opt/qango/qango-rest" ]
EXPOSE 8080
