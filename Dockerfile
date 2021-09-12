FROM shamyr/contentium-base as builder
RUN rm -rf ./data
COPY ./data ./data
COPY ./public/ ./public/
RUN yarn export

FROM scratch AS export-builder
COPY --from=builder /app/out/ /